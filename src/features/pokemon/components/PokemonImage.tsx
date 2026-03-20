import { Image } from "expo-image";
import { Text, View } from "react-native";

interface IPokemonImageProps {
  uri: string;
  width: number;
  height: number;
}

const PokemonImage = ({ uri, width, height }: IPokemonImageProps) => {
  if (!uri) {
    return (
      <View className="items-center justify-center" style={{ width, height }}>
        <Text className="text-slate-500">No image</Text>
      </View>
    );
  }

  return (
    <Image source={{ uri }} style={{ width, height }} contentFit="contain" />
  );
};

export default PokemonImage;
