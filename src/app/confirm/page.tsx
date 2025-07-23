export default function ConfirmPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        確認メールを送信しました
                    </h2>
                </div>
                <p className="text-center text-sm text-gray-600">
                    メールボックスを確認し、リンクをクリックしてアカウントを有効化してください。
                </p>
            </div>
        </div>
    );
}