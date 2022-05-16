import {Composition} from 'remotion';
import {CreditRoll} from './CreditRoll';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="CreditRoll"
				component={CreditRoll}
				durationInFrames={60 * 60}
				fps={60}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
