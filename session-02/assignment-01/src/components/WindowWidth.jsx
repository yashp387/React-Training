// 5.Class → function
// Below is a working class component in the classistyle:`constructor(props)`,`super(props)`,`this.state` in the constructor, and a bound method for the event handler. You’ll see this pattern in older codebases. Add it to your sandbox, run it, then rewrite it as a function component using`useState`and`useEffect`(with cleanup where needed).
// Working class component (copy this into your sandbox first):

// class WindowWidth extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       width: typeof window !== "undefined" ? window.innerWidth : 0,
//     };
//     this.handleResize = this.handleResize.bind(this);
//   }

//   handleResize() {
//     this.setState({ width: window.innerWidth });
//   }

//   componentDidMount() {
//     window.addEventListener("resize", this.handleResize);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.handleResize);
//   }

//   render() {
//     return (
//       <div>
//         <p>
//           Window width: <strong>{this.state.width}px</strong>
//         </p>
//         <small>
//           Resize the window to see it update. Unmount to remove the listener.
//         </small>
//       </div>
//     );
//   }
// }

// Your task: Rewrite WindowWidth as a function component using useState for width and useEffect to add the resize listener in the effect and remove it in the cleanup (return a function from useEffect that calls removeEventListener). Use the same UI so behavior stays the same.

// solution
import { useState, useEffect } from "react";

function WindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>
        Window width: <strong>{width}px</strong>
      </p>
      <small>
        Resize the window to see it update. Unmount to remove the listener.
      </small>
    </div>
  );
}

export default WindowWidth;