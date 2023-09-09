import Input from "./Input";

export default function () {
  const RenderText = (value: string) => <div>The OTHER value is {value}</div>;
	return (
		<div>
			<span className='text-center'>Text value:</span>
			<Input renderTextBelow={(value) => <div>The value is {value}</div>} />
			<Input renderTextBelow={RenderText} />
		</div>
	);
}
