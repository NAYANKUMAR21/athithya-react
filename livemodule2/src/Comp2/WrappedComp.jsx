import { useState } from 'react';

const WrappedComp = (OriginalComponent) => {
  return function NewComponent() {
    const [state, SetState] = useState(0);

    const handleSetState = () => {
      SetState((prev) => prev + 1);
    };
    return <OriginalComponent state={0} handleSetState={handleSetState} />;
  };
};

export default WrappedComp;
