import { ThemeContext } from "@/context/ThemeContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import Octicons from '@expo/vector-icons/Octicons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function EditScreen() {
    const { id } = useLocalSearchParams()
    const [todo, setTodo] = useState({})
    const { colorScheme, setColorScheme, theme } = useContext(ThemeContext)
    const router = useRouter()

    const [loaded, error] = useFonts({
        Inter_500Medium,
    })

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const jsonValue = await AsyncStorage.getItem("TodoApp")
                const storageTodos = jsonValue != null ? JSON.parse(jsonValue) : null

                if (storageTodos && storageTodos.length) {
                    const myTodo = storageTodos.find(todo => todo.id.toString() === id)
                    setTodo(myTodo)
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData(id)
    }, [id])

    const styles = createStyles(theme, colorScheme);

    const handleSave = async () => {
        try {
            const savedTodo = { ...todo, title: todo.title }

            const jsonValue = await AsyncStorage.getItem("TodoApp")
            const storageTodos = jsonValue != null ? JSON.parse(jsonValue) : null

            if (storageTodos && storageTodos.length) {
                const otherTodos = storageTodos.filter(todo => todo.id !== savedTodo.id)
                const allTodos = [...otherTodos, savedTodo]
                await AsyncStorage.setItem("TodoApp", JSON.stringify(allTodos))
            } else {
                await AsyncStorage.setItem("TodoApp", JSON.stringify([savedTodo]))
            }

            router.push('/')
        } catch (error) {
            console.error(error);
        }
    }

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    maxLength={30}
                    placeholder="Edit Todo"
                    placeholderTextColor="gray"
                    value={todo?.title || ""}
                    onChangeText={(text) => setTodo(prev => ({ ...prev, title: text }))}
                />
                <Pressable onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')} style={{ marginLeft: 10 }}>
                    <Octicons name={colorScheme === 'dark' ? "moon" : "sun"} size={36} color={theme.text} selectable={undefined} style={{ width: 36 }} />
                </Pressable>
            </View>
            <View style={styles.inputContainer}>
                <Pressable
                    style={[styles.cancelButton, { backgroundColor: 'red' }]}
                    onPress={() => router.push('/')}
                >
                    <Text style={[styles.cancelButtonText, { color: 'white' }]}>
                        Cancel
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.cancelButton}
                    onPress={handleSave}
                >
                    <Text style={styles.cancelButtonText}>
                        Save
                    </Text>
                </Pressable>
            </View>
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </SafeAreaView>
    )
}

function createStyles(theme, colorScheme) {
    const insets = useSafeAreaInsets();
    return (
        StyleSheet.create({
            container: {
                flex: 1,
                width: '100%',
                backgroundColor: theme.background,
                paddingTop: insets.top,
            },
            inputContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                gap: 6,
                width: '100%',
                maxWidth: 1024,
                marginHorizontal: 'auto',
                pointerEvents: 'auto'
            },
            input: {
                flex: 1,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginRight: 10,
                fontSize: 18,
                fontFamily: 'Inter_500Medium',
                minWidth: 0,
                color: theme.text,
            },
            cancelButton: {
                backgroundColor: theme.button,
                borderRadius: 5,
                padding: 10,
            },
            cancelButtonText: {
                fontSize: 18,
                color: colorScheme === 'dark' ? 'black' : 'white',
            }
        })
    )
}