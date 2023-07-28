import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import Budget from '../pages/Budget'
import GptRecord from '../pages/GptRecord'
import ManualRecord from '../pages/ManualRecord'
import Tips from '../pages/Tips'
import Home from '../pages/Home'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Budget"
                component={Budget}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="GptRecord"
                component={GptRecord}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ManualRecord"
                component={ManualRecord}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Tips"
                component={Tips}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}