import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';

interface ICollapsibleCardProps {
  header: React.ReactNode;
}

const CollapsibleCard: React.FC<ICollapsibleCardProps> = props => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <Card>
        <CardHeader>{props.header}</CardHeader>
        <CardContent>{props.children}</CardContent>
      </Card>
    </div>
  );
};

export default CollapsibleCard;
