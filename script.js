// All spiritual messages
const messages = [
    {}, // Index 0 not used
    
    // Quran Messages
    {
        arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        transliteration: "Inna ma'al-usri yusra",
        translation: "\"Indeed, with hardship comes ease.\" (Quran 94:6)",
        reflection: "This ease is already on its way to you. Allah has promised."
    },
    {
        arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        transliteration: "La yukallifullahu nafsan illa wus'aha",
        translation: "\"Allah does not burden a soul beyond that it can bear.\" (Quran 2:286)",
        reflection: "Allah knows your exact capacity. You are stronger than you think."
    },
    {
        arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        transliteration: "Ala bi-dhikrillahi tatma'innul-qulub",
        translation: "\"Verily, in the remembrance of Allah do hearts find rest.\" (Quran 13:28)",
        reflection: "Breathe: 'Ya Allah.' Let your heart settle in His name."
    },
    {
        arabic: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
        transliteration: "Wa rahmati wasi'at kulla shay",
        translation: "\"And My Mercy embraces all things.\" (Quran 7:156)",
        reflection: "You are swimming in an ocean of divine mercy right now."
    },
    
    // Prayer Messages
    {
        arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
        transliteration: "Wasta'eenoo bis-sabri was-salah",
        translation: "\"And seek help through patience and prayer.\" (Quran 2:45)",
        reflection: "Your prayer mat is your lifeline. Even tired prayers are accepted."
    },
    {
        arabic: "أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ",
        transliteration: "Aqrabu ma yakoonul-abdu min rabbihi wa huwa saajid",
        translation: "\"The closest a servant is to their Lord is when they are in prostration.\" (Hadith)",
        reflection: "In sujood, you are whispering directly into Allah's ear. He is listening."
    },
    {
        arabic: "الصَّلَاةُ نُورٌ",
        transliteration: "As-salatu noor",
        translation: "\"Prayer is light.\" (Hadith)",
        reflection: "Even one ray of this light can dispel your darkness."
    },
    {
        arabic: "إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ",
        transliteration: "Idha sa'alta fas'alillah",
        translation: "\"When you ask, ask Allah.\" (Hadith)",
        reflection: "Your dua is never unanswered. The response is: Yes, Not yet, or Something better."
    },
    
    // Remembrance Messages
    {
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        transliteration: "Subhanallahi wa bihamdihi",
        translation: "\"Glory be to Allah and praise Him.\"",
        reflection: "Each tasbih is a jewel that adorns your record of deeds."
    },
    {
        arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
        transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
        translation: "\"There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.\" (Quran 21:87)",
        reflection: "The prayer of Yunus (AS) in the whale's belly. Your hardship has an exit too."
    },
    {
        arabic: "أَسْتَغْفِرُ اللَّهَ",
        transliteration: "Astaghfirullah",
        translation: "\"I seek forgiveness from Allah.\"",
        reflection: "Istighfar opens doors, removes worries, and brings ease."
    },
    {
        arabic: "حَسْبِيَ اللَّهُ وَنِعْمَ الْوَكِيلُ",
        transliteration: "Hasbiyallahu wa ni'mal wakeel",
        translation: "\"Sufficient for me is Allah, and He is the best Disposer of affairs.\" (Quran 3:173)",
        reflection: "Say this 7 times morning and evening. Watch how your heart settles."
    },
    
    // Patience Messages
    {
        arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
        transliteration: "Innallaha ma'as-sabirin",
        translation: "\"Indeed, Allah is with the patient.\" (Quran 2:153)",
        reflection: "You are not being patient alone. Allah is WITH you in this moment."
    },
    {
        arabic: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
        transliteration: "Wasbir fa innallaha la yudee'u ajral muhsinin",
        translation: "\"And be patient, for indeed, Allah does not allow the reward of those who do good to be lost.\" (Quran 11:115)",
        reflection: "Every second of patience is being recorded and rewarded."
    },
    {
        arabic: "مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُمْ مِنْ حَرَجٍ",
        transliteration: "Ma yureedullahu liyaj'ala alaikum min haraj",
        translation: "\"Allah does not intend to make difficulty for you.\" (Quran 5:6)",
        reflection: "This test is not cruelty. It's elevation disguised as difficulty."
    },
    {
        arabic: "عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ",
        transliteration: "Ajaban li-amril mu'min, inna amrahu kullahu khair",
        translation: "\"How wonderful is the affair of the believer! Verily, all of his affairs are good.\" (Hadith)",
        reflection: "If good befalls him, he is grateful. If difficulty befalls him, he is patient. Both are good."
    },
    
    // Mercy Messages
    {
        arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ",
        transliteration: "Qul ya 'ibadi alladhina asrafu 'ala anfusihim la taqnutu min rahmatillah",
        translation: "\"Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah.'\" (Quran 39:53)",
        reflection: "No sin is too great for Allah's mercy. No sadness is too deep for His comfort."
    },
    {
        arabic: "الرَّاحِمُونَ يَرْحَمُهُمْ الرَّحْمَنُ",
        transliteration: "Ar-rahimoona yarhamuhumur-Rahman",
        translation: "\"Those who are merciful are shown mercy by the Most Merciful.\" (Hadith)",
        reflection: "Be merciful to yourself today. Allah will match it with His mercy."
    },
    {
        arabic: "إِذَا أَحَبَّ اللَّهُ عَبْدًا ابْتَلَاهُ",
        transliteration: "Idha ahabballahu 'abdan ibtalahu",
        translation: "\"When Allah loves a servant, He tests them.\" (Hadith)",
        reflection: "This difficulty may be a sign of Allah's special love for you."
    },
    {
        arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى",
        transliteration: "Wa lasawfa yu'teeka rabbuka fatarda",
        translation: "\"And your Lord is going to give you, and you will be satisfied.\" (Quran 93:5)",
        reflection: "Allah's gift is coming. You will look back and say, 'This was worth it.'"
    }
];

// Game state
let openedItems = [false, false, false, false, false];
let openedCount = 0;
let messageIndex = 1; // Start with first message of each category

function revealMessage(itemNumber) {
    // Don't do anything if already opened
    if (openedItems[itemNumber - 1]) {
        return;
    }
    
    // Mark as opened
    openedItems[itemNumber - 1] = true;
    openedCount++;
    
    // Update progress
    document.getElementById('counter').textContent = openedCount;
    document.getElementById('progressFill').style.width = (openedCount / 5) * 100 + '%';
    
    // Visual feedback for item
    const itemElement = document.getElementById('item' + itemNumber);
    const iconElement = document.getElementById('icon' + itemNumber);
    
    itemElement.classList.add('opened');
    iconElement.style.transform = 'scale(1.2) rotate(5deg)';
    iconElement.style.color = '#d4af37';
    
    // Get message based on item and current index
    let messageToShow;
    if (itemNumber === 1) {
        messageToShow = messages[messageIndex]; // Quran messages
    } else if (itemNumber === 2) {
        messageToShow = messages[messageIndex + 4]; // Prayer messages
    } else if (itemNumber === 3) {
        messageToShow = messages[messageIndex + 8]; // Remembrance messages
    } else if (itemNumber === 4) {
        messageToShow = messages[messageIndex + 12]; // Patience messages
    } else if (itemNumber === 5) {
        messageToShow = messages[messageIndex + 16]; // Mercy messages
    }
    
    // Update message display
    document.getElementById('arabicText').textContent = messageToShow.arabic;
    document.getElementById('transliteration').textContent = messageToShow.transliteration;
    document.getElementById('translation').textContent = messageToShow.translation;
    document.getElementById('reflection').textContent = messageToShow.reflection;
    
    // Animate message box
    const messageBox = document.getElementById('messageBox');
    messageBox.style.transform = 'scale(1.05)';
    setTimeout(() => {
        messageBox.style.transform = 'scale(1)';
    }, 300);
    
    // Cycle to next message in category for next time
    messageIndex++;
    if (messageIndex > 4) {
        messageIndex = 1;
    }
    
    // Check if all items opened
    if (openedCount === 5) {
        setTimeout(showFinalSurprise, 1000);
    }
}

function showFinalSurprise() {
    // Hide message box
    document.getElementById('messageBox').style.display = 'none';
    
    // Show final surprise
    document.getElementById('finalSurprise').style.display = 'block';
    
    // Add sparkle effect
    createSparkles();
}

function createSparkles() {
    // Create multiple sparkles
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = '-50px';
            sparkle.style.fontSize = (Math.random() * 30 + 20) + 'px';
            sparkle.style.opacity = '0.8';
            sparkle.style.zIndex = '9999';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = `sparkleFall ${Math.random() * 2 + 3}s linear forwards`;
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes sparkleFall {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(sparkle);
            
            // Remove after animation
            setTimeout(() => {
                sparkle.remove();
                if (style.parentNode) {
                    style.remove();
                }
            }, 4000);
        }, i * 100);
    }
}

function resetAll() {
    // Reset state
    openedItems = [false, false, false, false, false];
    openedCount = 0;
    messageIndex = 1;
    
    // Reset UI
    document.getElementById('counter').textContent = '0';
    document.getElementById('progressFill').style.width = '0%';
    
    // Reset items
    for (let i = 1; i <= 5; i++) {
        const itemElement = document.getElementById('item' + i);
        const iconElement = document.getElementById('icon' + i);
        
        itemElement.classList.remove('opened');
        iconElement.style.transform = 'scale(1) rotate(0deg)';
        iconElement.style.color = '#1a5f7a';
    }
    
    // Reset messages
    document.getElementById('arabicText').textContent = 'إِنَّ مَعَ الْعُسْرِ يُسْرًا';
    document.getElementById('transliteration').textContent = 'Inna ma\'al-usri yusra';
    document.getElementById('translation').textContent = '"Indeed, with hardship comes ease." (Quran 94:6)';
    document.getElementById('reflection').textContent = 'Click any item above to begin receiving spiritual comfort...';
    
    // Show message box again
    document.getElementById('messageBox').style.display = 'flex';
    
    // Hide final surprise
    document.getElementById('finalSurprise').style.display = 'none';
}

// Initialize with first message
window.onload = function() {
    // Show initial message
    document.getElementById('arabicText').textContent = messages[1].arabic;
    document.getElementById('transliter
