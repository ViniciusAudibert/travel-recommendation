export const DynatraceCart = () => (
  <amp-analytics type="dynatrace">
    <script
      type="application/json"
      dangerouslySetInnerHTML={{
        __html: `{
            "vars": {
                "app": "e7cc7521eedab9ab",
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
