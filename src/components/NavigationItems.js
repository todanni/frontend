import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import LibraryAddCheckTwoToneIcon from "@material-ui/icons/LibraryAddCheckTwoTone";
import LibraryBooksTwoToneIcon from "@material-ui/icons/LibraryBooksTwoTone";
import {Link} from "react-router-dom";
import TimelineTwoToneIcon from '@material-ui/icons/TimelineTwoTone';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import Badge from "@material-ui/core/Badge";
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import WidgetsTwoToneIcon from '@material-ui/icons/WidgetsTwoTone';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';

export default function NavigationItems(props) {

    const navigationItems = [
        {key: "Tasks", to: "/tasks", icon: <LibraryAddCheckTwoToneIcon/>},
        {key: "Projects", to: "/projects", icon: <LibraryBooksTwoToneIcon/>},
        {key: "Planning", to: "/planning", icon: <WidgetsTwoToneIcon/>},
        {key: "Teams", to: "/teams", icon: <SupervisorAccountTwoToneIcon/>},
        {key: "Activity", to: "/activity", icon: <TimelineTwoToneIcon/>},
    ];

    return (
        <div>
            {
                navigationItems.map((item) => {
                    return (
                        <ListItem button key={item.key} component={Link} to={item.to}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.key}/>
                        </ListItem>);
                })}

            <ListItem button component={Link} to='/notifications'>
                <ListItemIcon>
                    <Badge
                        badgeContent={1}
                        color="secondary"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <NotificationsActiveTwoToneIcon/>
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="Notifications"/>
            </ListItem>
        </div>
    );
}
