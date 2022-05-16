import React, {
	MutableRefObject,
	RefObject,
	useEffect,
	useRef,
	useState,
} from 'react';
import {
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

// Faker.seed(123); // Fixed seed so that it works on multiple threads https://www.remotion.dev/docs/using-randomness

// const memberList = Array(1000)
// 	.fill(0)
// 	.map((_, i) => {
// 		return faker.name.findName();
// 	});
const t3members = [
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
];
const memberList = [
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
	'Kittisart Wisedsook',
	'Ekachai R',
	'Keychron Thailand',
	'Sisira Hydrangea Ch.',
	'lazyningx',
];

const Members = React.memo(
	(props: {divRef: RefObject<HTMLDivElement>; translateY: number}) => {
		console.log('Members rerendered');

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
					{memberList.map((member, idx) => {
						return (
							<div
								key={idx}
								style={{minWidth: '50%', textAlign: 'center', color: 'white'}}
							>
								{member}
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