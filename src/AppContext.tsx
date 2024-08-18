import React from "react";

type ContextShape = {
  slides: React.ReactNode[];
  index: number;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
}

const Context = React.createContext({} as ContextShape)


type Props = {
  children: React.ReactNode;
  slides: React.ReactNode[];
}

export const AppContext = React.memo<Props>((props) => {
  const {children, slides} = props;

  const [index, setIndex] = React.useState(0);

  const onNext = React.useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides]);

  const onPrev = React.useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides]);

  const onReset = React.useCallback(() => {
    setIndex(0);
  }, [slides]);


  const value = React.useMemo(() => ({index, onNext, onPrev, onReset, slides}), [index, onNext, onPrev, onReset, slides]);

  return <Context.Provider value={value}>
    {children}
  </Context.Provider>
})


export const useAppContext = () => React.useContext(Context)
