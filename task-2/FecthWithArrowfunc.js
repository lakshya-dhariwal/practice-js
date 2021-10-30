try {
  const dataFetch = async () => {
    const res = await fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=e142b3392bca0be49cbbf828827d35fb69a9313f5b2ad7d9ad21d1d0093498dc"
    );
    const data = await res.json();
    console.log(data);
  };
  dataFetch();
} catch (e) {
  console.log(e);
}
