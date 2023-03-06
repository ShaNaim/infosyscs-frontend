import * as React from "react";
import DataDisplay from "./DataDisplay";
export class ComponentToPrint extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = { checked: false };
	}
	render() {
		return (
			<div className="relativeCSS">
				<DataDisplay reportList={this.props.displayData} />
			</div>
		);
	}
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
	// eslint-disable-line max-len
	return <ComponentToPrint ref={ref} text={props.text} />;
});
