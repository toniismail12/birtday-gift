import { TypeAnimation } from 'react-type-animation';

const TextAnimation = ({text}) => {

  return (
    <TypeAnimation
        sequence={text}
        speed={{type: 'keyStrokeDelayInMs', value: 250}}
        omitDeletionAnimation={true}
        wrapper="span"
        cursor={true}
        repeat={0}
        style={{ fontSize: '1em', display: 'inline-block' }}
    />
  );
};

export default TextAnimation;
