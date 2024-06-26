import { Text, View } from "react-native";
import CCButton from "./Core-Components/Button";
import CCImage from "./Core-Components/Image";
import CCModal from "./Core-Components/Modal";
import CCPrassable from "./Core-Components/Prassable";
import CCScrollView from "./Core-Components/ScrollView";
import CCText from "./Core-Components/Text";
import CCView from "./Core-Components/View";
import CCStatusBar from "./Core-Components/StatusBar";
import Greet from "./Components/Greet";
import CCStyleSheet from "./StylingRN/StyleSheet";
import DynamicUI from "./DynamicUI/DynamicUI";
import CCSafeAreaView from "./DynamicUI/SafeAreaView";
import CCPlatformSpecificCode from "./DynamicUI/Platform/PlatformSpecificCode";
import CustomButton from "./DynamicUI/Platform/CustomButton/CustomButton";

export default function App() {
  return <CustomButton title="press me" onPress={() => alert("Pressed")} />;
  <CCText />;
}
