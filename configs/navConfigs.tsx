import React, { Fragment } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import FavoritesScreen from '../screens/Favorites';
import ProfileScreen from '../screens/Profile';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import Icon from '../components/Icon';
import { styleConfigs } from './styleConfigs';
import DetailScreen from '../screens/Detail';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface IBottomNavScreenConfig {
    name: any;
    icon: any;
    component: any;
};

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabStack = createStackNavigator();

const styles = StyleSheet.create({
    headerContainer: {
        // borderColor: 'red',
        // borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    headerTitleText: {
        width: '100%',
        fontSize: 22,
        fontWeight: 'bold',
        color: styleConfigs.lightGreyColor,
    },
    centerHTView: {
        width: 80,
    }
});

function HomeScreenNavigator() {
    return (
        <TabStack.Navigator>
            <TabStack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation, route }: any) => {
                    return {
                        headerTitle: () => (
                            <Fragment>
                                <View style={styles.headerContainer}>
                                    <Icon name="menu-outline" color={styleConfigs.lightGreyColor} />
                                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                        <Icon name="person-outline" color={styleConfigs.lightGreyColor} />
                                    </TouchableOpacity>
                                </View>
                            </Fragment>
                        )
                    }
                }}
            />
            <TabStack.Screen
                name="Detail"
                component={DetailScreen}
                options={(/* { navigation, route }: any */) => {
                    return {
                        headerTitle: () => (
                            <Fragment>
                                <View style={styles.headerContainer}>
                                    <View></View>
                                    {/* <TouchableOpacity>
                                        <Icon name="chevron-back-outline" color={styleConfigs.lightGreyColor} />
                                    </TouchableOpacity> */}
                                    <View style={styles.centerHTView}>
                                        <Text style={styles.headerTitleText}>
                                            Detail
                                        </Text>
                                    </View>
                                    <Icon name="star-outline" color={styleConfigs.lightGreyColor} />
                                </View>
                            </Fragment>
                        )
                    }
                }}
            />
        </TabStack.Navigator>
    )
};

function FavoritesScreenNavigator() {
    return (
        <TabStack.Navigator>
            <TabStack.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    headerTitle: () => (
                        <Fragment>
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerTitleText}>
                                    Favorites
                                </Text>
                            </View>
                        </Fragment>
                    )
                }}
            />
        </TabStack.Navigator>
    )
};

function ProfileScreenNavigator() {
    return (
        <TabStack.Navigator>
            <TabStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerTitle: () => (
                        <Fragment>
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerTitleText}>
                                    Profile
                                </Text>
                            </View>
                        </Fragment>
                    )
                }}
            />
        </TabStack.Navigator>
    )
};

export const bottomNavScreenConfig: IBottomNavScreenConfig[] = [
    {
        name: 'Home',
        icon: 'home-outline',
        component: HomeScreenNavigator,
    },
    {
        name: 'Favorites',
        icon: 'star-outline',
        component: FavoritesScreenNavigator,
    },
    {
        name: 'Profile',
        icon: 'person-outline',
        component: ProfileScreenNavigator,
    },
];
