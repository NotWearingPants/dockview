import { IDisposable } from '../lifecycle';
import { IGroupview } from './groupview';
import { IDockviewComponent } from '../dockview/dockviewComponent';
import { IGroupPanelApi } from '../api/groupPanelApi';
import { PanelInitParameters, IPanel } from '../panel/types';
import { DockviewApi } from '../api/component.api';

export interface HeaderPartInitParameters {
    title: string;
    suppressClosable?: boolean;
}

export interface GroupPanelPartInitParameters
    extends PanelInitParameters,
        HeaderPartInitParameters {
    api: IGroupPanelApi;
    containerApi: DockviewApi;
}

export interface PanelHeaderPart extends IPanel {
    element: HTMLElement;
    init(parameters: GroupPanelPartInitParameters): void;
    updateParentGroup(group: IGroupview, isPanelVisible: boolean): void;
}

export interface PanelContentPart extends IPanel {
    element: HTMLElement;
    actions?: HTMLElement;
    updateParentGroup(group: IGroupview, isPanelVisible: boolean): void;
    init(parameters: GroupPanelPartInitParameters): void;
    close?(): Promise<boolean>;
}

// watermark component

export interface WatermarkPartInitParameters {
    accessor: IDockviewComponent;
}

export interface WatermarkPart extends IDisposable {
    id: string;
    init: (params: GroupPanelPartInitParameters) => void;
    updateParentGroup(group: IGroupview, visible: boolean): void;
    element: HTMLElement;
}

// constructors

export interface PanelHeaderPartConstructor {
    new (): PanelHeaderPart;
}
export interface PanelContentPartConstructor {
    new (): PanelContentPart;
}

export interface WatermarkConstructor {
    new (): WatermarkPart;
}