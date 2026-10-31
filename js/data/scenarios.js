// Each scenario: metadata + intro/objective/hint + steps `s`.
// Translatable text is a triple: [English, Roman Urdu, Urdu].
// Step: { app, h (heading), b (body), o (options [label,id,btnClass]), end, badge,
//         w (what happened), k (takeaway) }

export const SCENARIOS = {
  perm: {
    title: 'App Permissions', time: '5 min', col: '--teal', ic: '🔐',
    desc: 'Understand what apps can access and when you should allow permission.',
    intro: ['Sometimes apps ask to access your photos, contacts or location. Let’s understand what happens when you allow or deny access.', 'Kabhi kabhi apps aapki photos, contacts ya location tak pohanchna chahti hain. Aayiye dekhein ke Allow ya Deny karne par kya hota hai.', 'کبھی کبھی ایپس آپ کی تصاویر، کانٹیکٹس یا لوکیشن تک رسائی مانگتی ہیں۔ آئیے دیکھتے ہیں کہ اجازت دینے یا نہ دینے پر کیا ہوتا ہے۔'],
    obj: ['Decide how to answer the permission request.', 'Faisla karein ke permission request ka kya jawab dena hai.', 'فیصلہ کریں کہ اجازت کی درخواست کا کیا جواب دینا ہے۔'],
    hint: ['Ask yourself: does a photo app really need my contacts?', 'Khud se poochein: kya photo app ko waqai contacts ki zaroorat hai?', 'خود سے پوچھیں: کیا فوٹو ایپ کو واقعی میرے کانٹیکٹس کی ضرورت ہے؟'],
    s: {
      start: { app: 'Photo Magic', h: 'Photo Magic wants permission to view your contacts.', b: ['An app is asking for your contact list.', ''],
        o: [['Allow', 'allow', 'p'], ['Don’t Allow', 'deny', 't'], ['Allow Once', 'once', 'o']],
        w: ['A fictional app has asked for access. Nothing has happened yet. Take your time.', 'Ek farzi app ne permission maangi hai. Abhi kuch nahi hua. Araam se sochein.', 'ایک فرضی ایپ نے رسائی مانگی ہے۔ ابھی کچھ نہیں ہوا۔ آرام سے سوچیں۔'],
        k: ['Apps ask first, so you always get to decide.', 'App pehle poochti hai, faisla hamesha aapka hota hai.', 'ایپ پہلے پوچھتی ہے، اس لیے فیصلہ ہمیشہ آپ کا ہوتا ہے۔'] },
      allow: { app: 'Photo Magic', h: 'Contacts shared ✔', b: ['Photo Magic can now see your contacts, until you change it in Settings.', ''], end: 1, o: [],
        w: ['When you press Allow, the app gets permission to see contacts in this simulation.', 'Jab aap Allow press karte hain, toh is simulation mein app ko contacts dekhne ki permission mil jati hai.', 'جب آپ Allow دباتے ہیں تو اس سمولیشن میں ایپ کو کانٹیکٹس دیکھنے کی اجازت مل جاتی ہے۔'],
        k: ['Allow only when the app truly needs it. You can change this later.', 'Allow tabhi dein jab app ko waqai zaroorat ho. Baad mein badal bhi sakte hain.', 'Allow صرف تب دیں جب ایپ کو واقعی ضرورت ہو۔ آپ اسے بعد میں بدل بھی سکتے ہیں۔'] },
      deny: { app: 'Photo Magic', h: 'Access blocked ✖', b: ['The app cannot see your contacts, but still works for photos.', ''], end: 1, o: [],
        w: ['Don’t Allow keeps contacts private. The app still opens, with fewer features.', 'Don’t Allow se contacts private rehte hain. App phir bhi chalti hai, bas kuch features kam hote hain.', 'Don’t Allow سے کانٹیکٹس نجی رہتے ہیں۔ ایپ پھر بھی کھلتی ہے، بس کچھ فیچرز کم ہو جاتے ہیں۔'],
        k: ['It is perfectly fine to say no to a request that feels unnecessary.', 'Agar request ghair-zaroori lage toh “No” kehna bilkul theek hai.', 'اگر درخواست غیر ضروری لگے تو “نہیں” کہنا بالکل ٹھیک ہے۔'] },
      once: { app: 'Photo Magic', h: 'Temporary access ⏳', b: ['The app can see contacts for this visit only. It must ask again next time.', ''], end: 1, o: [],
        w: ['Allow Once gives access for now. Next time, the app has to ask again.', 'Allow Once se abhi ke liye access milta hai. Agli baar app ko dobara poochna paray ga.', 'Allow Once سے ابھی کے لیے رسائی ملتی ہے۔ اگلی بار ایپ کو دوبارہ پوچھنا پڑے گا۔'],
        k: ['A good middle path when you are unsure.', 'Jab pakka na ho, yeh beech ka acha rasta hai.', 'جب پکا یقین نہ ہو تو یہ بیچ کا اچھا راستہ ہے۔'] }
    }
  },

  photo: {
    title: 'Recover a Deleted Photo', time: '4 min', col: '--orange', ic: '🖼️',
    desc: 'Practise deleting and restoring a picture without losing anything.',
    intro: ['Deleted a photo by mistake? Most phones keep it for a while in a “Recently Deleted” folder. Let’s practise.', 'Photo ghalti se delete ho gayi? Aksar phones usay kuch din “Recently Deleted” folder mein rakhte hain. Chalein practice karein.', 'تصویر غلطی سے ڈیلیٹ ہو گئی؟ زیادہ تر فونز اسے کچھ دن کے لیے “Recently Deleted” فولڈر میں رکھتے ہیں۔ آئیے مشق کرتے ہیں۔'],
    obj: ['Delete the Eid picnic photo, then bring it back.', 'Eid picnic wali photo delete karein, phir wapas layein.', 'عید پکنک والی تصویر ڈیلیٹ کریں، پھر اسے واپس لائیں۔'],
    hint: ['Look for a folder called Recently Deleted.', '“Recently Deleted” naam ka folder dhoondein.', '“Recently Deleted” نام کا فولڈر تلاش کریں۔'],
    s: {
      start: { app: 'Gallery', h: 'Eid picnic 📷', b: ['A fictional photo of the family picnic.', ''], o: [['Delete this photo', 'gone', 'p'], ['Keep it', 'keep', 't']],
        w: ['You are looking at one fictional photo.', 'Aap ek farzi photo dekh rahe hain.', 'آپ ایک فرضی تصویر دیکھ رہے ہیں۔'],
        k: ['Deleting is a button press. Undoing is possible too.', 'Delete sirf ek button hai, aur wapas bhi aa sakti hai.', 'ڈیلیٹ کرنا بس ایک بٹن دبانا ہے، اور تصویر واپس بھی آ سکتی ہے۔'] },
      keep: { app: 'Gallery', h: 'Photo stays safe', b: ['Nothing changed. Press Go Back to try deleting.', ''], o: [],
        w: ['You kept the photo. No changes were made.', 'Aapne photo rakhi. Kuch nahi badla.', 'آپ نے تصویر رکھ لی۔ کچھ نہیں بدلا۔'],
        k: ['Not pressing is also a choice.', 'Click na karna bhi ek faisla hai.', 'کلک نہ کرنا بھی ایک فیصلہ ہے۔'] },
      gone: { app: 'Gallery', h: 'Photo deleted', b: ['The photo left your gallery. Don’t worry, it moved to Recently Deleted.', ''], o: [['Open Recently Deleted', 'bin', 'o']],
        w: ['The photo moved out of the main gallery but was not erased yet.', 'Photo main gallery se hat gayi lekin abhi poori tarah khatam nahi hui.', 'تصویر مرکزی گیلری سے ہٹ گئی لیکن ابھی مکمل طور پر مٹی نہیں۔'],
        k: ['Deleted photos usually wait in a bin first.', 'Delete ki hui photos aksar pehle bin mein jati hain.', 'ڈیلیٹ کی ہوئی تصاویر عموماً پہلے ایک ڈبے (بن) میں جاتی ہیں۔'] },
      bin: { app: 'Recently Deleted', h: '1 item here', b: ['Eid picnic · 29 days left', ''], o: [['Restore photo', 'back', 'g'], ['Delete forever', 'forever', 'p']],
        w: ['This is the safety bin, where deleted photos wait for a while.', 'Yeh safety bin hai, jahan delete ki hui photos kuch din rukti hain.', 'یہ حفاظتی ڈبہ (بن) ہے، جہاں ڈیلیٹ کی ہوئی تصاویر کچھ دن رکھی رہتی ہیں۔'],
        k: ['Restore brings it back to the gallery.', 'Restore se photo gallery mein wapas aati hai.', 'Restore سے تصویر گیلری میں واپس آ جاتی ہے۔'] },
      back: { app: 'Gallery', h: 'Photo restored 🎉', b: ['The Eid picnic photo is back in your gallery.', ''], end: 1, badge: 'rescuer', o: [],
        w: ['Restore returned the photo to the gallery in this simulation.', 'Is simulation mein Restore ne photo gallery mein wapas rakh di.', 'اس سمولیشن میں Restore نے تصویر گیلری میں واپس رکھ دی۔'],
        k: ['Mistakes can be fixed. Check the bin first.', 'Ghalti theek ho sakti hai. Pehle bin dekhein.', 'غلطی ٹھیک ہو سکتی ہے۔ پہلے بن دیکھیں۔'] },
      forever: { app: 'Recently Deleted', h: 'Removed for good', b: ['In this simulation the photo is gone. Press Go Back to rewind.', ''], end: 1, o: [],
        w: ['Delete forever cannot usually be undone on a real phone.', 'Asli phone par Delete forever aam taur par wapas nahi hota.', 'اصلی فون پر Delete forever عموماً واپس نہیں ہوتا۔'],
        k: ['Be careful with “forever” buttons. Here, you can rewind.', '“Forever” wale buttons se ehtiyaat karein. Yahan aap rewind kar sakte hain.', '“Forever” والے بٹنوں سے احتیاط کریں۔ یہاں آپ ریوائنڈ کر سکتے ہیں۔'] }
    }
  },

  msg: {
    title: 'Recognise Suspicious Messages', time: '5 min', col: '--indigo', ic: '⚠️',
    desc: 'Learn what to check before opening an unfamiliar message or link.',
    intro: ['Scam messages often promise prizes and rush you. Let’s learn what to check first.', 'Dhokay wale messages aksar inaam ka lalach dete hain aur jaldi karwate hain. Pehle kya check karna hai, seekhte hain.', 'دھوکے والے پیغامات اکثر انعام کا لالچ دیتے ہیں اور جلدی مچاتے ہیں۔ آئیے سیکھتے ہیں کہ پہلے کیا دیکھنا چاہیے۔'],
    obj: ['Decide what to do with this unknown message.', 'Faisla karein ke is anjaan message ka kya karna hai.', 'فیصلہ کریں کہ اس انجان پیغام کا کیا کرنا ہے۔'],
    hint: ['Unknown number, big prize, and a rushed link are warning signs.', 'Anjaan number, bara inaam aur jaldi wala link, yeh khatre ki nishaniyan hain.', 'انجان نمبر، بڑا انعام اور جلدی والا لنک، یہ خطرے کی نشانیاں ہیں۔'],
    s: {
      start: { app: 'Messages', h: 'Unknown number', b: ['“Congratulations! You won Rs 500,000. Tap bit.ly/claim-now within 1 hour!”', ''], o: [['Tap the link', 'link', 'p'], ['Ask a family member', 'ask', 'g'], ['Delete the message', 'del', 't']],
        w: ['A fictional message arrived from a number you do not know.', 'Ek anjaan number se farzi message aaya hai.', 'ایک انجان نمبر سے فرضی پیغام آیا ہے۔'],
        k: ['Pause before you tap.', 'Tap karne se pehle ruk jayein.', 'ٹیپ کرنے سے پہلے رک جائیں۔'] },
      link: { app: 'Browser (fake)', h: 'Fake page opened', b: ['It asks for your bank PIN. A real prize never needs this. Go Back and try again.', ''], end: 1, o: [],
        w: ['Tapping opened a fictional scam page asking for private details.', 'Tap karne se ek farzi dhokay wala page khula jo zaati maloomat maang raha hai.', 'ٹیپ کرنے سے ایک فرضی دھوکے والا صفحہ کھلا جو نجی معلومات مانگ رہا ہے۔'],
        k: ['Never share PINs or OTPs. Real banks never ask.', 'PIN ya OTP kisi se share na karein. Asli bank kabhi nahi poochta.', 'PIN یا OTP کسی سے شیئر نہ کریں۔ اصلی بینک کبھی نہیں پوچھتا۔'] },
      ask: { app: 'Family chat', h: 'Great choice! 🕵️', b: ['Ahmed Uncle says: “That is a scam. Prizes you did not enter for are not real.”', ''], end: 1, badge: 'detective', o: [],
        w: ['Asking someone you trust is one of the best checks.', 'Kisi bharosay-mand se poochna sab se behtareen check hai.', 'کسی بھروسے مند سے پوچھنا سب سے بہترین جانچ ہے۔'],
        k: ['Unknown sender + prize + hurry = suspicious.', 'Anjaan sender + inaam + jaldi = shak wali baat.', 'انجان بھیجنے والا + انعام + جلدی = شک والی بات۔'] },
      del: { app: 'Messages', h: 'Message deleted', b: ['Safe. You did not tap anything.', ''], end: 1, badge: 'detective', o: [],
        w: ['Deleting a suspicious message is a safe move.', 'Shak wala message delete karna mehfooz qadam hai.', 'شک والا پیغام ڈیلیٹ کرنا محفوظ قدم ہے۔'],
        k: ['Ignoring or deleting is safe. Telling family helps too.', 'Nazar-andaz ya delete karna mehfooz hai. Ghar walon ko batana bhi acha hai.', 'نظر انداز یا ڈیلیٹ کرنا محفوظ ہے۔ گھر والوں کو بتانا بھی اچھا ہے۔'] }
    }
  }
};
