import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";

import categories from "../../config/constants/categories";
import colors from "../../config/constants/colors";
import { SPACING } from "../../config/constants/spacing"

const Categories = ({ onChange, activeCategory }) => {

    const handlePress = (item) => {
        if (item.name === "All") {
            onChange(null)
            return
        }
        onChange(item.id);
    };

    return (
        <FlatList
            horizontal={true}
            data={categories}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ marginVertical: SPACING }}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => handlePress(item)}
                    style={{ marginRight: SPACING * 2, alignItems: "center" }}
                >
                    <Text
                        style={[
                            { color: colors.secondary, fontSize: SPACING * 2 },
                            (activeCategory === item.id || (activeCategory === null && item.name === "All")) && { color: colors.primary },
                        ]}
                    >
                        {item.name}
                    </Text>
                    {(activeCategory === item.id || (activeCategory === null && item.name === "All")) && (
                        <View
                            style={{
                                height: SPACING,
                                width: SPACING,
                                backgroundColor: colors.primary,
                                borderRadius: SPACING / 2,
                                marginTop: SPACING / 2,
                            }}
                        />
                    )}
                </TouchableOpacity>
            )}
        />
    );
};

export default Categories;

const styles = StyleSheet.create({});
