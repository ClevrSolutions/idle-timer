/**
 * This file was generated from IdleTimer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface IdleTimerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    timeoutAttribute?: EditableValue<Big>;
    timeout: number;
    timeoutAction?: ActionValue;
}

export interface IdleTimerPreviewProps {
    class: string;
    style: string;
    timeoutAttribute: string;
    timeout: number | null;
    timeoutAction: {} | null;
}
