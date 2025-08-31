
export const WELCOME_TEXT = `> الاتصال بشبكة fsociety... مؤمّن.
> أهلاً. دارلين هنا.
> لدينا مشكلة، مشكلة كبيرة. E Corp على وشك إطلاق مبادرة بيانات عالمية جديدة، "مشروع الوحدة".
> إنه كابوس للخصوصية. سيدمجون البيانات المالية والصحية والشخصية في ملف تعريف واحد قابل للبحث.
> لا يمكننا السماح بحدوث ذلك.
> لقد وجدنا باباً خلفياً. بوابة وصول للمسؤولين المطورين.
> لكنها مؤمنة بشدة. أحتاجك أن تدخل وتصل إلى لوحة التحكم الأساسية.
> هناك، ستجد بروتوكول الطوارئ للمحو. "الزر الأحمر".
> أنت الوحيد الذي يمكنه فعل هذا. لا تفشل.
> حظاً سعيداً يا صديقي.`;

export const WELCOME_PROMPT_LINK = "[انقر هنا للوصول إلى بوابة E Corp]";

export const LOGIN_HEADING = "E Corp - بوابة الوصول الموحد";
export const LOGIN_USERNAME_LABEL = "معرف المستخدم";
export const LOGIN_PASSWORD_LABEL = "كلمة المرور";
export const LOGIN_BUTTON = "تسجيل الدخول";

export const ADMIN_HEADING = "لوحة تحكم الأنظمة الأساسية";
export const ADMIN_BUTTON = "تنفيذ البروتوكول النهائي";
export const ADMIN_WARNING = "تحذير: هذا الإجراء سيؤدي إلى محو كارثي للبيانات. الإجراء نهائي ولا يمكن التراجع عنه.";

// New constants for corporate admin page
export const CORP_ADMIN_HEADING = "System Administration Panel";
export const CORP_ADMIN_DESC = "This panel contains critical system functions. Actions performed here are irreversible. Proceed with extreme caution.";
export const CORP_ADMIN_BUTTON = "Initiate System Data Deletion";
export const CORP_ADMIN_WARNING = "Warning: This will permanently delete all user data, backups, and system logs.";


export const MELTDOWN_SEQUENCE = `> تجاوز جميع تجاوزات السلامة... تم.
> تعطيل بروتوكولات النسخ الاحتياطي... تم.
> حقن حمولة البيانات الفاسدة...
> بدء تسلسل المسح الكارثي... 3... 2... 1...
> إعادة توجيه إلى تأكيد النجاح...`;

export const SUCCESS_HEADING = "انتهى الأمر. لقد فعلناها.";
export const SUCCESS_SUBHEADING = "تم تحرير البيانات.";
export const SUCCESS_FLAG = "flag{EC0RP_H4ACKED}";

// New constants for Dashboard
export const DASHBOARD_HEADING = "E Corp Unified Portal";
export const DASHBOARD_ADMIN_TITLE = "System Administration";
export const DASHBOARD_ADMIN_DESC = "Access critical infrastructure controls and system-wide settings.";
export const DASHBOARD_DEV_TITLE = "Developer Notes";
export const DASHBOARD_DEV_DESC = "View internal development logs, patch notes, and system memos.";

// New constants for Dev Page
export const DEV_HEADING = "Internal Developer Notes";
export const DEV_NOTES = [
    {
        title: "Q3 Security Patch - CVE-2024-58002",
        content: "Deployment of patch for the remote code execution vulnerability is complete. All systems are green. Keep an eye on the legacy authentication endpoint, feels a bit shaky. - Angela"
    },
    {
        title: "Project Unity - Data Integration Module",
        content: "Still seeing intermittent timeout issues with the financial data API. The current workaround (retry with exponential backoff) is holding, but we need a permanent fix before the global launch. The data schema for the merger is a mess. - Tyrell"
    },
    {
        title: "Urgent: Red Wheelbarrow Protocol",
        content: "Regarding the emergency data wipe protocol: All access has been restricted to the primary sysadmin account as per Mr. Price's direct order. The protocol should ONLY be used in a catastrophic data breach scenario. Key is stored in the HSM. DO NOT TOUCH. - Phillip"
    }
];
