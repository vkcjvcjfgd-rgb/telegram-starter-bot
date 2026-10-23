import { InlineKeyboard } from "grammy"

export function registerCommands(bot) {
    // رسالة الترحيب والقائمة الرئيسية
    bot.command("start", (ctx) => {
        const name = ctx.from?.first_name ?? "صديقي";
        const welcomeText = `أهلاً بك يا ${name} في بوت Delta Key Skip! 🚀\n\nأنا بوت تجاوز الروابط الأسرع والأسهل.\nالمطور: YOUSEF 👨‍💻\n\nاختر من القائمة أدناه ما تريد:`;

        const keyboard = new InlineKeyboard()
            .text("🌐 تجاوز رابط", "bypass_link").row()
            .text("🔑 نظام مفاتيح تفعيل", "activation_keys").row()
            .text("📖 شرح البوت", "bot_explanation").row()
            .text("🎮 هاكات وسكريبتات", "hacks_scripts").row()
            .text("⭐ تقييمات البوت", "reviews").row()
            .text("🌐 تغيير اللغة", "change_language");

        ctx.reply(welcomeText, { reply_markup: keyboard });
    });

    // برمجة الأزرار عند الضغط عليها
    bot.callbackQuery("bypass_link", async (ctx) => {
        await ctx.answerCallbackQuery();
        await ctx.reply("أرسل لي الرابط الذي تريد تجاوزه الآن 👇");
    });

    bot.callbackQuery("activation_keys", async (ctx) => {
        await ctx.answerCallbackQuery();
        await ctx.reply("🔑 لتفعيل البوت، يرجى إرسال مفتاح التفعيل الخاص بك.");
    });

    bot.callbackQuery("bot_explanation", async (ctx) => {
        await ctx.answerCallbackQuery();
        await ctx.reply("📖 هذا البوت مخصص لتجاوز الروابط المختصرة وتخطي المهام بسهولة. تم تطويره بواسطة YOUSEF.");
    });

    bot.callbackQuery("hacks_scripts", async (ctx) => {
        await ctx.answerCallbackQuery();
        await ctx.reply("🎮 قسم الهاكات والسكريبتات قيد التطوير حالياً.");
    });

    bot.callbackQuery("reviews", async (ctx) => {
        await ctx.answerCallbackQuery();
        await ctx.reply("⭐ يمكنك تقييم البوت من خلال إرسال تقييمك هنا.");
    });

    bot.callbackQuery("change_language", async (ctx) => {
        await ctx.answerCallbackQuery();
        await ctx.reply("🌐 اللغات المتاحة:\n- العربية 🇸🇦\n- English 🇬🇧\n(سيتم إضافة المزيد قريباً)");
    });

    // الأوامر الأساسية للاختبار
    bot.command("help", (ctx) => ctx.reply("الأوامر:\n/start - القائمة الرئيسية\n/help - قائمة المساعدة"));
    bot.command("ping", (ctx) => ctx.reply("pong"));

    // رد تجريبي على أي نص يرسله المستخدم
    bot.on("message:text", (ctx) => ctx.reply("لقد أرسلت: " + ctx.message.text + "\n(سيتم برمجة منطق تجاوز الروابط هنا قريباً)"));
      }
