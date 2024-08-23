import { View, Text, ScrollView, Image } from "react-native"

export default function Flex() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>

                <View style={{ alignItems: 'center', 
                justifyContent: 'center' }}>
                    <Text>Pizza Napolitana</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center'  }}>
                        <Image style={{ width: 150, height: 150  }}
                            source={require('../assets/images/gtr.jpg')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent:'center' }}>
                        <Text> Lorem Ipsum lorem ipsum Ipsum lorem ipsum </Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', 
                justifyContent: 'center' }}>
                    <Text>Pizza Napolitana</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center'  }}>
                        <Image style={{ width: 150, height: 150  }}
                            source={require('../assets/images/centenario.jpg')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent:'center' }}>
                        <Text> Lorem Ipsum lorem ipsum Ipsum lorem ipsum </Text>
                    </View>
                </View>
            </View>

        </ScrollView >
    )
}