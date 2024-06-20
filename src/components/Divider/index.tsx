import "./index.css"

interface DividerProps {
  className?: HTMLHRElement["className"];
}

const Divider = ({ className }: DividerProps) => {
  return <div className={'divider ' + className} />;
};

export default Divider;
