import {Chip} from "@material-ui/core";
import React from "react";

export default function TaskProjectPanel(props) {
    const [projectChipVariant, setProjectChipVariant] = React.useState('default');

    return (
        <div style={{'marginLeft': '10px', 'paddingBottom': '7px'}}>
            <Chip
                label="Danni's project"
                variant={projectChipVariant}
                onClick={() => setProjectChipVariant('outlined')}/>
            <Chip
                label="Metered billing"
                color="primary"
                variant={projectChipVariant}
                onClick={() => setProjectChipVariant('outlined')}/>
            <Chip
                label="Machine importer"
                color="secondary"
                variant={projectChipVariant}
                onClick={() => setProjectChipVariant('outlined')}/>
        </div>
    );
}