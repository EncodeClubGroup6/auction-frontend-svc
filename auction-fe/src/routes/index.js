const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
