import ThemeToggle from '../components/ThemeToggle';
import UserProfile from '../components/UserProfile';
import HookExample from '../components/HookExample';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          🎯 Context & Provider 학습하기
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-4">
            아래 버튼을 클릭해서 테마를 바꿔보세요!
          </p>
          <ThemeToggle />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <UserProfile />
          
          <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-800">
              💡 Context의 장점
            </h2>
            <ul className="space-y-2 text-blue-700">
              <li>• props drilling 없이 데이터 공유</li>
              <li>• 전역 상태 관리 간편</li>
              <li>• 컴포넌트 간 결합도 감소</li>
              <li>• 코드 재사용성 향상</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <HookExample />
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h2 className="text-xl font-bold mb-4">🔍 코드 구조 설명</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold">1. Context 생성</h3>
              <p className="text-gray-600">ThemeContext.tsx에서 createContext로 컨텍스트 생성</p>
            </div>
            <div>
              <h3 className="font-semibold">2. Provider 설정</h3>
              <p className="text-gray-600">ThemeProvider에서 Context.Provider로 데이터 제공</p>
            </div>
            <div>
              <h3 className="font-semibold">3. Custom Hook 사용</h3>
              <p className="text-gray-600">useTheme()으로 어디서든 테마 정보 접근 가능</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
