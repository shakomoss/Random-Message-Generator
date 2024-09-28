const zodArr = [ "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius"];

    const preds = [
        "Focus on your goals; success is near.",
        "Embrace change; new opportunities await.",
        "Trust your intuition; creativity will flow.",
        "Take bold steps; your confidence is your strength.",
        "Stability is key; nurture your relationships.",
        "Communication is vital; express your ideas.",
        "Home is where your heart is; cherish family time.",
        "Shine bright; your charisma attracts attention.",
        "Organize your life; clarity brings peace.",
        "Balance is essential; seek harmony in chaos.",
        "Dive deep; transformation leads to growth.",
        "Adventure calls; explore new horizons.",
        "Patience will reward you; stay the course.",
        "A surprise awaits; be open to new experiences.",
        "Your hard work will pay off; stay committed.",
        "Seek knowledge; learning will empower you.",
        "Trust in your instincts; they won't lead you astray.",
        "Reconnect with an old friend; it will bring joy.",
        "Financial stability is on the horizon; manage wisely.",
        "Explore your passions; creativity will flourish.",
        "Take care of your health; prioritize self-care.",
        "Kindness will be returned; spread positivity.",
        "Listen more; understanding others will benefit you.",
        "Courage will guide you; don't fear the unknown."
      ];

const nums = [];
for (let i = 1; i <= 30; i++) {
  nums.push(i);
}

const months = [ "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];


    const messageGenerator = () => {
      const zodiaco =  Math.floor(Math.random()*zodArr.length);
      const quote =  Math.floor(Math.random()*preds.length);
      const num = Math.floor(Math.random()*nums.length);
      const mnth = Math.floor(Math.random()*months.length)
      return zodArr[zodiaco]+" - "+preds[quote]+ " "+nums[num]+"/"+months[mnth];
    };

    messageGenerator();
    console.log(messageGenerator())