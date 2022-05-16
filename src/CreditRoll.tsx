import React, {
	MutableRefObject,
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

// Const t2members = fs.openSync(path.join(__dirname, '../ts2members.csv'), 'r');
const csvPath = staticFile(`/t2members.csv`);

const t2ParsePromise: Promise<Array<any>> = new Promise((resolve, reject) => {
	Papa.parse(csvPath, {
		download: true,
		header: true,
		complete: (result) => {
			const members = result.data;
			const t2members = members.filter((m: any) => {
				if (!m['Current level']) {
					return false;
				}
				return m['Current level'].match(/เลี้ยงกาแฟ/);
			});
			resolve(t2members);
		},
	});
});

const t3members = [
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
];

const Members = React.memo(
	(props: {divRef: RefObject<HTMLDivElement>; translateY: number}) => {
		const [t2members, setT2Members] = useState<Array<any>>([]);
		const [handle] = useState(() => delayRender());

		const fetchData = useCallback(async () => {
			setT2Members(await t2ParsePromise);

			continueRender(handle);
		}, [handle]);

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
				}}
			>
				<h1>ขอขอบคุณเหล่านายทุน</h1>

				<h2>ประธานบอร์ดบริหาร</h2>

				<div style={{fontSize: '180px'}}>becky_style</div>

				<h2>ทีมช่วยผ่อนบ้าน</h2>

				{t3members.map((member, idx) => {
					return (
						<div key={idx} style={{color: 'white'}}>
							{member}
						</div>
					);
				})}

				<h2>ทีมเลี้ยงข้าว</h2>

				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyItems: 'center',
						width: '60%',
						margin: '0 auto',
					}}
				>
					{t2members.map((member, idx) => {
						return (
							<div
								key={idx}
								style={{minWidth: '50%', textAlign: 'center', color: 'white'}}
							>
								{member.Member}
							</div>
						);
					})}
				</div>

				<h2>และทีมเลี้ยงกาแฟทุกท่าน</h2>
			</div>
		);
	}
);

export const CreditRoll: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const [height, setHeight] = useState(0);
	// Const ref = useRef(null)

	useEffect(() => {
		if (ref?.current) {
			console.log({height: ref.current.scrollHeight});

			setHeight(ref.current.scrollHeight);
		}
	}, [ref]);

	const translateY = ~~interpolate(
		frame,
		[0, durationInFrames],
		[1080 * 1.2, -(height + 300)],
		{
			extrapolateRight: 'clamp',
		}
	);

	// Const scale = spring({
	// 	fps,
	// 	from: 0,
	// 	to: 1,
	// 	frame,
	// });

	return (
		<div style={{fontSize: '2rem'}}>
			<Members divRef={ref} translateY={translateY} />
		</div>
	);
};
