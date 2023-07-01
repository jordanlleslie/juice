/* 
* Component for including space between other components
* 
@param {number} size The size of the spacer in rem
*
*/

export default function Spacer(props) {
  const width = props.size + "rem";
  return <div style={{ width }} />;
}
