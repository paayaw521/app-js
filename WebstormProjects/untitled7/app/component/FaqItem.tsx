import React from 'react';

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    return (
        <div className="text-justify flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-6 h-auto overflow-auto max-w-3xl p-4 sm:p-0">
            {/* circle */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-[#bdff00] text-black rounded-full font-mono font-bold text-sm sm:text-base">
                Q
            </div>
            {/* text */}
            <div className="flex-1">
                <h3 className="text-black font-semibold font-mono text-sm sm:text-base mb-2">{question}</h3>
                <p className="text-black font-light font-mono text-xs sm:text-sm">{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;