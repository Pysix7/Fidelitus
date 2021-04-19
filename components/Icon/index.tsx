import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
interface IProps {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string
}

export default function Icon(props: IProps) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
