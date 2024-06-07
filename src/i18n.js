import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            "Title": "Başlık",
            "Note": "Not",
            "Add Note": "Notu Ekle",
            "Delete": "Sil",
            "Update": "Güncelle",
            "Save Changes": "Değişiklikleri Kaydet",
            "Create New Note": "Yeni Not Oluştur",
            "Log Out": "Çıkış Yap",
            "Login with google": "Google ile giriş",
            "Welcome": "Hoşgeldin",
            "Error!": "Hata!",
            "Save Note": "Not Kaydedildi",
            "Are you sure?": "Emin misin?",
            "You won't be able to revert this!": "Bunu geri döndüremezsiniz!",
            "Deleted": "Silindi",
            "Your note has been deleted.": "Notunuz silindi.",
            "Yes": "Evet",
            "English": "İngilizce",
            "Turkish": "Türkçe"
        }
    },
    en: {
        translation: {
            "Title": "Title",
            "Note": "Note",
            "Add Note": "Add Note",
            "Delete": "Delete",
            "Update": "Update",
            "Save Changes": "Save Changes",
            "Create New Note": "Create New Note",
            "Log Out": "Log Out",
            "Login with google": "Login with google",
            "Welcome": "Welcome",
            "Error!": "Error!",
            "Save Note": "Save Note",
            "Are you sure?": "Are you sure?",
            "You won't be able to revert this!": "You won't be able to revert this!",
            "Deleted": "Deleted",
            "Your note has been deleted.": "Your file has been deleted.",
            "Yes": "Yes",
            "English": "English",
            "Turkish": "Turkish"
        }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr",
    
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;