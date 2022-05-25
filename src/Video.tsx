import {Composition} from 'remotion';
import {CreditRoll} from './CreditRoll';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="CreditRoll"
				component={CreditRoll}
				durationInFrames={60 * 60} // Duration of the whole video
				fps={60}
				width={960}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
