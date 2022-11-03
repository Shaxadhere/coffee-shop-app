import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, Text, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import { SPACING } from '../../config/constants/spacing'
import { BlurView } from "expo-blur"
import Icon from "react-native-vector-icons/Ionicons"
import colors from '../../config/constants/colors'
import SearchField from '../../components/SearchField'
import Categories from '../../components/Categories'
import coffees from '../../config/constants/coffees'
const avatar = require("../../assets/images/avatar.jpg")
const { width } = Dimensions.get("window")

const HomeScreen = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
        console.log(search)
    }, [search])
    return (
        <View style={{ flex: 1, backgroundColor: colors.dark }}>
            <SafeAreaView>
                <ScrollView
                    style={{
                        padding: SPACING,
                    }}
                >
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <TouchableOpacity
                            style={{
                                borderRadius: SPACING,
                                overflow: "hidden",
                                width: SPACING * 4,
                                height: SPACING * 4,
                            }}
                        >
                            <BlurView
                                style={{
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Icon name="menu" size={SPACING * 2.5} color={colors.secondary} />
                            </BlurView>
                        </TouchableOpacity>
                        <View
                            style={{
                                width: SPACING * 4,
                                height: SPACING * 4,
                                overflow: "hidden",
                                padding: SPACING / 2,
                                borderRadius: SPACING
                            }}
                        >
                            <BlurView
                                style={{
                                    height: "100%"
                                }}
                            >
                                <Image style={{ height: "100%", width: "100%", borderRadius: SPACING }} source={avatar} />
                            </BlurView>
                        </View>
                    </View>
                    <View style={{ width: "80%", marginVertical: SPACING * 3 }}>
                        <Text style={{ color: colors.white, fontSize: SPACING * 3.5, fontWeight: "600" }}>Find the best coffee for you</Text>
                    </View>
                    <SearchField
                        onChange={(value) => setSearch(value)}
                        value={search}
                    />
                    <Categories onChange={(id) => setActiveCategory(id)} activeCategory={activeCategory} />

                    <View style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}>
                        {
                            coffees.filter((item) => {
                                if (activeCategory === null && !search) {
                                    return item
                                }
                                else if (activeCategory === null && search) {
                                    if (item.name.toLowerCase().includes(search?.toLowerCase())) {
                                        return item
                                    }
                                }
                                return item.categoryId === activeCategory
                            }).map((item, index) =>
                                <View
                                    key={index}
                                    style={{
                                        width: width / 2 - SPACING * 2,
                                        marginBottom: SPACING,
                                        borderRadius: SPACING * 2,
                                        overflow: "hidden"
                                    }}>
                                    <BlurView
                                        tint="dark"
                                        intensity={95}
                                        style={{
                                            padding: SPACING,
                                            borderRadius: SPACING * 2,
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("Details", { coffee: item })}
                                            style={{
                                                height: 150,
                                                width: "100%"
                                            }}>
                                            <Image
                                                source={item.image}
                                                style={{ width: "100%", height: "100%", borderRadius: SPACING * 2, }}
                                            />
                                            <View style={{
                                                position: "absolute",
                                                right: 0,
                                                borderBottomStartRadius: SPACING * 3,
                                                borderTopEndRadius: SPACING * 2,
                                                overflow: "hidden"
                                            }}>
                                                <BlurView
                                                    tint="dark"
                                                    intensity={70}
                                                    style={{
                                                        flexDirection: "row",
                                                        padding: SPACING - 2,

                                                    }}>
                                                    <Icon style={{
                                                        marginLeft: SPACING / 2,
                                                    }} name='star' color={colors.primary} size={SPACING * 1.7} />
                                                    <Text style={{
                                                        color: colors.white,
                                                        marginLeft: SPACING / 2
                                                    }}>{item.rating}</Text>
                                                </BlurView>
                                            </View>
                                        </TouchableOpacity>
                                        <Text
                                            numberOfLines={2}
                                            style={{
                                                color: colors.white,
                                                fontWeight: "600",
                                                fontSize: SPACING * 1.7,
                                                marginTop: SPACING,
                                                marginBottom: SPACING / 2
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                        <Text numberOfLines={1} style={{ color: colors.secondary, fontSize: SPACING * 1.2 }}>
                                            {item.included}
                                        </Text>
                                        <View style={{
                                            marginVertical: SPACING / 2,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <View style={{
                                                flexDirection: "row"
                                            }}>
                                                <Text
                                                    style={{
                                                        color: colors.primary,
                                                        fontSize: SPACING * 1.6,
                                                        marginRight: SPACING / 2
                                                    }}
                                                >$</Text>
                                                <Text
                                                    style={{
                                                        color: colors.white,
                                                        fontSize: SPACING * 1.6
                                                    }}
                                                >
                                                    {item.price}
                                                </Text>
                                            </View>
                                            <TouchableOpacity

                                                style={{
                                                    backgroundColor: colors.primary,
                                                    padding: SPACING / 2,
                                                    borderRadius: SPACING
                                                }}>
                                                <Icon name="add" size={SPACING * 2} color={colors.white} />
                                            </TouchableOpacity>
                                        </View>
                                    </BlurView>
                                </View>
                            )}
                    </View>

                </ScrollView>
            </SafeAreaView >
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

