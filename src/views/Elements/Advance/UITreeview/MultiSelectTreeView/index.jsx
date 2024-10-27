import React from 'react';

// material-ui
import { TreeItem, TreeView } from '@mui/x-tree-view';

// ==============================|| MULTI SELECT TREE VIEW ||============================== //

export default function MultiSelectTreeView() {
  return (
    <TreeView sx={{ height: 'auto', flexGrow: 1 }} multiSelect>
      <TreeItem itemId="1" label="Applications">
        <TreeItem itemId="2" label="Calendar" />
        <TreeItem itemId="3" label="Chrome" />
        <TreeItem itemId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem itemId="5" label="Documents">
        <TreeItem itemId="6" label="Material-UI">
          <TreeItem itemId="7" label="src">
            <TreeItem itemId="8" label="index.js" />
            <TreeItem itemId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
