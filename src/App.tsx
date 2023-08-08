import {
  Panel,
  InfoRow,
  Select,
  Button,
  Input,
  Group,
  PanelHeader,
  SimpleCell,
  View,
  CardGrid,
} from "@vkontakte/vkui";

export default function App() {
  return (
    <View activePanel="profile">
      <Panel id="profile">
        <PanelHeader>VKUI</PanelHeader>
        <Group>
          <SimpleCell>Hello</SimpleCell>
          <SimpleCell>world</SimpleCell>
        </Group>
      </Panel>
    </View>
  );
}
