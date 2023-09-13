import {Stack} from "expo-router"

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name = "index" options = {{headerTitle: 'Goal Screen', headerShown: false}}/>
        </Stack>
    )
}


export default StackLayout;