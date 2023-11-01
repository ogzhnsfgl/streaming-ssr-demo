export default function Loading() {
  return (
    <div>
      <div className="w-full text-center flex align-center justify-center mt-32">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
      <p className="w-full text-center text-xl flex align-center justify-center mt-32">
        This indicator means that server side rendering is still processing. Requested HTML will be
        displayed when rendering completed.
      </p>
    </div>
  );
}
