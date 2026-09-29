import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function CreateScreen() {
  const router = useRouter();
  
  // Tab Mode
  const [creationMode, setCreationMode] = useState<'ai' | 'manual'>('ai');

  // AI Form State
  const [aiPrompt, setAiPrompt] = useState("");
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  
  // Manual Form State
  const [manualTitle, setManualTitle] = useState("");
  const [manualContent, setManualContent] = useState("");
  
  // Shared State
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Genre List
  const GENRES = ['Psych Thriller', 'Dark Romance', 'Epic Fantasy', 'Sci-Fi'];

  const handleGenerateAI = async () => {
    if (!selectedMode || !selectedGenre) return alert("Please select a mode and genre!");
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      router.push("/(tab_story)" as any);
    }, 2000);
  };

  const handlePublishManual = async () => {
    if (!manualTitle.trim() || !manualContent.trim() || !selectedGenre) {
      return alert("Title, content, and genre are required!");
    }
    setIsProcessing(true);
    // Simulate publish to DB
    setTimeout(() => {
      setIsProcessing(false);
      alert("Story published successfully!");
      // Reset form or navigate to library
      setManualTitle("");
      setManualContent("");
      setSelectedGenre(null);
      router.push("/(tabs)/library" as any);
    }, 2000);
  };

  const renderGenreGrid = () => (
    <View>
      <Text className="text-lg font-bold text-[#151B2C] mb-3">Genre</Text>
      <View className="flex-row flex-wrap justify-between">
        {GENRES.map((genre) => (
          <TouchableOpacity 
            key={genre}
            onPress={() => setSelectedGenre(genre)}
            className={`w-[48%] rounded-2xl py-5 items-center border mb-4 ${selectedGenre === genre ? 'border-[#ED6442] bg-[#ED6442]/10' : 'border-[#151B2C]/20 bg-[#FDF3E1]'}`}
          >
            <Text className={`font-semibold ${selectedGenre === genre ? 'text-[#ED6442]' : 'text-[#151B2C]'}`}>{genre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        className="flex-1"
      >
        <ScrollView contentContainerClassName="px-6 pt-6 pb-32" keyboardShouldPersistTaps="handled">
          
          <Text className="text-3xl font-bold text-[#151B2C] mb-6">Create Story</Text>

          {/* Toggle Tabs */}
          <View className="flex-row bg-zinc-200/50 rounded-full p-1 mb-8">
            <TouchableOpacity 
              onPress={() => setCreationMode('ai')}
              className={`flex-1 py-3 rounded-full items-center ${creationMode === 'ai' ? 'bg-[#ED6442]' : ''}`}
            >
              <Text className={`font-bold ${creationMode === 'ai' ? 'text-white' : 'text-[#151B2C]'}`}>Generate with AI</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => setCreationMode('manual')}
              className={`flex-1 py-3 rounded-full items-center ${creationMode === 'manual' ? 'bg-[#151B2C]' : ''}`}
            >
              <Text className={`font-bold ${creationMode === 'manual' ? 'text-white' : 'text-[#151B2C]'}`}>Write My Own</Text>
            </TouchableOpacity>
          </View>

          {creationMode === 'ai' ? (
            /* ================= AI FORM ================= */
            <View>
              <Text className="text-[#151B2C]/70 mb-6">Let Claude weave an original interactive story based on your ideas.</Text>

              {/* Custom Prompt */}
              <Text className="text-lg font-bold text-[#151B2C] mb-3">Custom Idea (Optional)</Text>
              <TextInput
                className="border border-[#151B2C]/30 rounded-2xl p-4 bg-white mb-8 text-[#151B2C] text-base"
                placeholder="e.g. A detective solving a crime on Mars..."
                placeholderTextColor="#151B2C50"
                multiline
                numberOfLines={3}
                value={aiPrompt}
                onChangeText={setAiPrompt}
                textAlignVertical="top"
              />

              {/* Mode Selection */}
              <Text className="text-lg font-bold text-[#151B2C] mb-3">Mode</Text>
              <View className="flex-row space-x-4 mb-8">
                {['Mystery', 'Quest'].map((mode) => (
                  <TouchableOpacity 
                    key={mode}
                    onPress={() => setSelectedMode(mode)}
                    className={`flex-1 rounded-2xl py-6 items-center border ${selectedMode === mode ? 'border-[#ED6442] bg-[#ED6442]/10' : 'border-[#151B2C]/20 bg-[#FDF3E1]'} ${mode === 'Mystery' ? 'mr-2' : 'ml-2'}`}
                  >
                    <Text className="text-3xl mb-2">{mode === 'Mystery' ? '📦' : '📜'}</Text>
                    <Text className={`font-semibold ${selectedMode === mode ? 'text-[#ED6442]' : 'text-[#151B2C]'}`}>{mode}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Shared Genre */}
              {renderGenreGrid()}

            </View>
          ) : (
            /* ================= MANUAL FORM ================= */
            <View>
              <Text className="text-[#151B2C]/70 mb-6">Write and publish your own story to the community.</Text>

              {/* Cover Image Placeholder */}
              <TouchableOpacity className="w-full h-40 border-2 border-dashed border-[#151B2C]/30 rounded-3xl bg-zinc-200/50 items-center justify-center mb-8">
                <View className="bg-white p-3 rounded-full shadow-sm mb-2">
                  <Feather name="image" size={24} color="#151B2C" />
                </View>
                <Text className="text-[#151B2C]/70 font-semibold">Upload Cover Art</Text>
              </TouchableOpacity>

              {/* Title Input */}
              <Text className="text-lg font-bold text-[#151B2C] mb-3">Story Title</Text>
              <TextInput
                className="border border-[#151B2C]/30 rounded-2xl px-5 py-4 bg-white mb-8 text-[#151B2C] font-bold text-xl"
                placeholder="The Secret of..."
                placeholderTextColor="#151B2C50"
                value={manualTitle}
                onChangeText={setManualTitle}
              />

              {/* Shared Genre */}
              {renderGenreGrid()}

              {/* Story Content Editor */}
              <Text className="text-lg font-bold text-[#151B2C] mb-3 mt-4">Story Content</Text>
              <TextInput
                className="border border-[#151B2C]/30 rounded-2xl p-5 bg-white min-h-[300px] text-[#151B2C] text-base leading-6"
                placeholder="Once upon a time..."
                placeholderTextColor="#151B2C50"
                multiline
                value={manualContent}
                onChangeText={setManualContent}
                textAlignVertical="top"
              />
            </View>
          )}

        </ScrollView>
      </KeyboardAvoidingView>

      {/* Floating Action Area */}
      <View className="absolute bottom-0 left-0 right-0 p-5 bg-[#FDF3E1] border-t border-[#151B2C]/10 pb-6">
        {creationMode === 'ai' ? (
          <TouchableOpacity 
            onPress={handleGenerateAI} 
            disabled={isProcessing}
            className={`py-4 rounded-full flex-row justify-center items-center ${isProcessing ? 'bg-[#ED6442]/70' : 'bg-[#ED6442]'}`}
          >
            {isProcessing ? (
              <ActivityIndicator color="white" />
            ) : (
              <>
                <Feather name="cpu" size={20} color="white" style={{marginRight: 8}} />
                <Text className="text-white font-bold text-lg">Generate Story</Text>
              </>
            )}
          </TouchableOpacity>
        ) : (
          <View className="flex-row justify-between">
             <TouchableOpacity 
              disabled={isProcessing}
              className="flex-1 mr-2 py-4 rounded-full flex-row justify-center items-center border border-[#151B2C]"
            >
              <Text className="text-[#151B2C] font-bold text-base">Save Draft</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={handlePublishManual} 
              disabled={isProcessing}
              className={`flex-1 ml-2 py-4 rounded-full flex-row justify-center items-center ${isProcessing ? 'bg-[#151B2C]/70' : 'bg-[#151B2C]'}`}
            >
              {isProcessing ? (
                <ActivityIndicator color="white" />
              ) : (
                <>
                  <Feather name="upload-cloud" size={18} color="white" style={{marginRight: 8}} />
                  <Text className="text-white font-bold text-base">Publish</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
