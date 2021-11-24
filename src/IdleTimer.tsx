import { Component, ReactNode, createElement } from "react";

import { IdleTimerContainerProps } from "../typings/IdleTimerProps";
import IdleTimerComponent from "react-idle-timer";

export default class IdleTimer extends Component<IdleTimerContainerProps> {
    private readonly onTimeoutHandler = this.onTimeout.bind(this);

    render(): ReactNode {
        let timeOut = this.props.timeout;
        if (this.props.timeoutAttribute != null && this.props.timeoutAttribute.value != null) {
            // big to number, ugly.
            timeOut = parseInt(this.props.timeoutAttribute.value.toString(), 10);
        }
        return <IdleTimerComponent timeout={1000 * timeOut} onIdle={this.onTimeoutHandler} debounce={250} />;
    }

    private onTimeout(): void {
        if (this.props.timeoutAction && this.props.timeoutAction.canExecute) {
            this.props.timeoutAction.execute();
        }
    }
}
