import { Image, View, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  // custom component
  const DotComponent = ({ selected }) => {
    return (
      <View
        className={`w-2 h-2 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border border-fuchsia-400" : ""
        } p-2`}
      >
        <View
          className={`w-1.5 h-1.5 ${
            selected ? "bg-fuchsia-400" : "bg-fuchsia-200"
          } rounded-full`}
        ></View>
      </View>
    );
  };

  const Skip = () => <Text className="text-fuchsia-800 p-2">Skip</Text>;

  const Next = () => (
    <Text className="text-fuchsia-800 p-2">Next</Text>
    );
    
  const Done = () => (
    <Text className="text-fuchsia-800 p-2">Done</Text>
    );
    
  return (
    <Onboarding
      onSkip={() => navigation.replace("HomeScreen")}
      onDone={() => navigation.navigate("HomeScreen")}
      DotComponent={DotComponent}
      NextButtonComponent={Next}
          SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
      titleStyles={{ color: "#a21caf" }}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../images/team1.png")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Achieve Your Goals",
          subtitle: "Productivity app for everyone",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../images/team.png")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Empower Your Team",
          subtitle: "Get your team on the same page",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../images/team2.png")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Stay Focused",
          subtitle: "Get more done with less effort",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
