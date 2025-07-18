// context/AgeContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type AgeContextType = {
	selectedAge: string | null;
	setSelectedAge: (age: string) => void;
};

const AgeContext = createContext<AgeContextType | undefined>(undefined);

export const AgeProvider = ({ children }: { children: ReactNode }) => {
	const [selectedAge, setSelectedAge] = useState<string | null>(null);

	return (
		<AgeContext.Provider value={{ selectedAge, setSelectedAge }}>
			{children}
		</AgeContext.Provider>
	);
};

export const useAge = () => {
	const context = useContext(AgeContext);
	if (!context) throw new Error('useAge must be used inside AgeProvider');
	return context;
};
