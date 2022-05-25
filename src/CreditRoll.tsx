import React, {
	RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import {
	continueRender,
	delayRender,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import Papa from 'papaparse';
import './fonts.css';

interface IMember {
	Member: string;
	'Link to profile': string;
	'Current level': string;
	'Total time on level (months)': string;
	'Total time as member (months)': string;
	'Last update': string;
	'Last update timestamp': string;
}

// Add custom style to names (case sensitive)
const customStyles: Record<string, React.CSSProperties> = {
	becky_style: {fontStyle: 'italic', fontWeight: 'bold'}, // eslint-disable-line
	HEARTROCKER: {color: 'red'},
	BullVPN: {fontWeight: 900},
};

// Load members from /public/members.csv (gitignored)
const memberCsvPath = staticFile(`/members.csv`);

// Tiers
const tiers: Record<number, RegExp> = {
	1: /เลี้ยงกาแฟ/,
	2: /เลี้ยงข้าว/,
	3: /ผ่อนบ้าน/,
};

const membersFetch: Promise<Array<IMember>> = new Promise((resolve, reject) => {
	Papa.parse(memberCsvPath, {
		download: true,
		header: true,
		complete: (result) => {
			const members = result.data.filter((m) => {
				return Boolean((m as IMember)['Current level']);
			}) as Array<IMember>;

			resolve(members);
		},
	});
});

const getMembersFromTier = (members: Array<IMember>, tier: number) => {
	if (!(tier in tiers)) {
		return [];
	}

	const tierMembers = members.filter((m: IMember) => {
		return tiers[tier].test(m['Current level']);
	});

	return tierMembers.sort((a, b) => {
		return (
			Number(b['Total time as member (months)']) -
			Number(a['Total time as member (months)'])
		);
	});
};

const Members = React.memo(
	(props: {
		divRef: RefObject<HTMLDivElement>;
		translateY: number;
		onLoad: () => void;
	}) => {
		const [members, setMembers] = useState<Array<IMember>>([]);
		const [handle] = useState(() => delayRender());

		const fetchData = useCallback(async () => {
			setMembers(await membersFetch);
			props.onLoad();
			continueRender(handle);
		}, [handle, props]);

		useEffect(() => {
			fetchData();
		}, [fetchData]);

		return (
			<div
				ref={props.divRef}
				style={{
					width: '100%',
					color: 'white',
					position: 'absolute',
					textAlign: 'center',
					transform: `translateY(${props.translateY}px)`,
					display: 'flex',
					flexDirection: 'column',
					gap: '10rem', // Gap between sections
				}}
			>
				<h1 style={{fontStyle: 'italic', fontWeight: 100}}>
					ขอขอบคุณเหล่านายทุน
				</h1>

				<section id="tier-4" style={{marginTop: '200px'}}>
					<h2 style={{fontWeight: 100}}>ประธานบอร์ดบริหาร</h2>

					<div style={{fontSize: '160px', ...(customStyles.becky_style ?? {})}}>
						becky_style
					</div>
				</section>

				<section id="tier-3" style={{marginTop: '300px'}}>
					<h2 style={{fontWeight: 100}}>ทีมช่วยผ่อนบ้าน</h2>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							flexWrap: 'wrap',
							justifyItems: 'center',
							width: '70%',
							margin: '0 auto',
							fontSize: '64px',
						}}
					>
						{getMembersFromTier(members, 3).map((m, idx) => {
							return (
								<div
									key={idx}
									style={{color: 'white', ...(customStyles[m.Member] ?? {})}}
								>
									{m.Member}
								</div>
							);
						})}
					</div>
				</section>

				<section id="tier-2" style={{marginTop: '800px'}}>
					<h2 style={{fontWeight: 100}}>ทีมเลี้ยงข้าว</h2>

					<div
						style={{
							width: '70%', // Overall width
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
							alignItems: 'center',
							margin: '0 auto',
							fontSize: '32px',
							// BackgroundColor: 'red', // Use for debugging
						}}
					>
						{getMembersFromTier(members, 2).map((m, idx) => {
							return (
								<div
									key={idx}
									style={{
										width: '32%', // Width per element
										textAlign: 'center',
										textOverflow: 'ellipsis',
										whiteSpace: 'nowrap',
										overflow: 'hidden',
										color: 'white',
										...(customStyles[m.Member] ?? {}),
										// BackgroundColor: 'green', // Use for debugging
									}}
								>
									{m.Member}
								</div>
							);
						})}
					</div>
				</section>

				<section id="tier-1" style={{marginTop: '500px'}}>
					<h2 style={{fontWeight: 100}}>และทีมเลี้ยงกาแฟทุกท่าน</h2>
				</section>
			</div>
		);
	}
);

export const CreditRoll: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const [height, setHeight] = useState(0);

	function onLoad() {
		if (ref?.current) {
			console.log({height: ref.current.scrollHeight});

			setHeight(ref.current.scrollHeight);
		}
	}

	const translateY = ~~interpolate(
		frame,
		[0, durationInFrames],
		[1080 * 1.2, -(height + 300)],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			style={{
				fontSize: '2rem',
				fontFamily: 'Kanit',
				fontWeight: 100,
			}}
		>
			{/* eslint-disable-next-line react/jsx-no-bind */}
			<Members divRef={ref} translateY={translateY} onLoad={onLoad} />
		</div>
	);
};
