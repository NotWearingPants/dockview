import { DockviewApi, DockviewGroupLocation } from 'dockview';
import * as React from 'react';

const GroupAction = (props: {
    groupId: string;
    groups: string[];
    api: DockviewApi;
    activeGroup?: string;
}) => {
    const onClick = () => {
        props.api?.getGroup(props.groupId)?.focus();
    };

    const isActive = props.activeGroup === props.groupId;
    const group = React.useMemo(
        () => props.api.getGroup(props.groupId),
        [props.api, props.groupId]
    );

    const [location, setLocation] =
        React.useState<DockviewGroupLocation | null>(null);
    const [isMaximized, setIsMaximized] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!group) {
            setLocation(null);
            return;
        }

        const disposable = group.api.onDidLocationChange((event) => {
            setLocation(event.location);
        });

        const disposable2 = props.api.onDidMaximizedGroupChange(() => {
            setIsMaximized(group.api.isMaximized());
        });

        setLocation(group.api.location);
        setIsMaximized(group.api.isMaximized());

        return () => {
            disposable.dispose();
            disposable2.dispose();
        };
    }, [group]);

    return (
        <div className="button-action">
            <div style={{ display: 'flex' }}>
                <button
                    onClick={onClick}
                    className={
                        isActive ? 'demo-button selected' : 'demo-button'
                    }
                >
                    {props.groupId}
                </button>
            </div>
            <div style={{ display: 'flex' }}>
                <button
                    className={
                        location?.type === 'floating'
                            ? 'demo-icon-button selected'
                            : 'demo-icon-button'
                    }
                    onClick={() => {
                        if (group) {
                            props.api.addFloatingGroup(group);
                        }
                    }}
                >
                    <span className="material-symbols-outlined">ad_group</span>
                </button>
                <button
                    className={
                        location?.type === 'popout'
                            ? 'demo-icon-button selected'
                            : 'demo-icon-button'
                    }
                    onClick={() => {
                        if (group) {
                            props.api.addPopoutGroup(group);
                        }
                    }}
                >
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </button>
                <button
                    className={
                        isMaximized
                            ? 'demo-icon-button selected'
                            : 'demo-icon-button'
                    }
                    onClick={() => {
                        if (group) {
                            if (group.api.isMaximized()) {
                                group.api.exitMaximized();
                            } else {
                                group.api.maximize();
                            }
                        }
                    }}
                >
                    <span className="material-symbols-outlined">
                        fullscreen
                    </span>
                </button>
                <button
                    className="demo-icon-button"
                    onClick={() => {
                        const panel = props.api?.getGroup(props.groupId);
                        panel?.api.close();
                    }}
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
    );
};

export const GroupActions = (props: {
    groups: string[];
    api: DockviewApi;
    activeGroup?: string;
}) => {
    return (
        <div className="action-container">
            {props.groups.map((groupId) => {
                return (
                    <GroupAction key={groupId} {...props} groupId={groupId} />
                );
            })}
        </div>
    );
};
