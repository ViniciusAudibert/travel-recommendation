export const DynatraceCheckout = () => (
  <amp-analytics type="dynatrace">
    <script
      type="application/json"
      dangerouslySetInnerHTML={{
        __html: `{
          "vars": {
            "app": "70bfb544fd4b216e",
            "protocol": "https",
            "environment" : "bf.dynatrace.com",
            "port": "443",
            "tenant": "bf41822uvm"
          }
        }`,
      }}
    />
  </amp-analytics>
)
