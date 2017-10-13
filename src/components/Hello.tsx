import * as React from 'react';

import '../css/hello.css';

// ?表示可选属性
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

class Hello extends React.Component<Props, {}> {
  a = 132;
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props; 

    if (enthusiasmLevel <= 0) {
      throw new Error('you could be a little more enthusiasmLevel. :D');
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

// function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D');
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//       <div>
//         <button onClick={onDecrement}>-</button>
//         <button onClick={onIncrement}>+</button>
//       </div>
//     </div>
//   );
// }

export default Hello;
