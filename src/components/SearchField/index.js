import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur/build'
import colors from '../../config/constants/colors'
import { SPACING } from '../../config/constants/spacing'
import Icon from "react-native-vector-icons/Ionicons"

const SearchField = ({ onChange, value }) => {
    return (
        <View style={{ borderRadius: SPACING, overflow: "hidden" }}>
            <BlurView intensity={30} style={{
                alignItems: "center",
                justifyContent: "center"
            }}>
                <TextInput
                    onChangeText={text => onChange(text)}
                    value={value}
                    style={{
                        width: "100%",
                        color: colors.white,
                        fontSize: SPACING * 1.7,
                        padding: SPACING,
                        paddingLeft: SPACING * 3.5,
                    }}
                    placeholder="Find Your Coffee..."
                    placeholderTextColor={colors.light}
                />
                <Icon style={{
                    position: "absolute",
                    left: SPACING
                }} name='search' color={colors.light} size={SPACING * 2} />
            </BlurView>
        </View>
    )
}

export default SearchField

const styles = StyleSheet.create({})