/**
 * Created by madsgadehenrichsen on 09/03/2018.
 */

window.onload = choosePic;

var myPix = new Array('../Melanoma/ISIC_0010550.jpg',
    '../Melanoma/ISIC_0011128.jpg',
    '../Melanoma/ISIC_0010587.jpg',
    '../Melanoma/ISIC_0010034.jpg',
    '../Melanoma/ISIC_0010746.jpg',
    '../Melanoma/ISIC_0010791.jpg',
    '../Melanoma/ISIC_0010785.jpg',
    '../Melanoma/ISIC_0010140.jpg',
    '../Melanoma/ISIC_0011276.jpg',
    '../Melanoma/ISIC_0011289.jpg',
    '../Melanoma/ISIC_0010394.jpg',
    '../Melanoma/ISIC_0010380.jpg',
    '../Melanoma/ISIC_0011288.jpg',
    '../Melanoma/ISIC_0011277.jpg',
    '../Melanoma/ISIC_0010784.jpg',
    '../Melanoma/ISIC_0010790.jpg',
    '../Melanoma/ISIC_0009955.jpg',
    '../Melanoma/ISIC_0010579.jpg',
    '../Melanoma/ISIC_0010551.jpg',
    '../Melanoma/ISIC_0010235.jpg',
    '../Melanoma/ISIC_0010209.jpg',
    '../Melanoma/ISIC_0010023.jpg',
    '../Melanoma/ISIC_0011329.jpg',
    '../Melanoma/ISIC_0011315.jpg',
    '../Melanoma/ISIC_0010792.jpg',
    '../Melanoma/ISIC_0010631.jpg',
    '../Melanoma/ISIC_0010143.jpg',
    '../Melanoma/ISIC_0010194.jpg',
    '../Melanoma/ISIC_0010355.jpg',
    '../Melanoma/ISIC_0011077.jpg',
    '../Melanoma/ISIC_0010396.jpg',
    '../Melanoma/ISIC_0010397.jpg',
    '../Melanoma/ISIC_0010426.jpg',
    '../Melanoma/ISIC_0010432.jpg',
    '../Melanoma/ISIC_0010803.jpg',
    '../Melanoma/ISIC_0010181.jpg',
    '../Melanoma/ISIC_0011260.jpg',
    '../Melanoma/ISIC_0010156.jpg',
    '../Melanoma/ISIC_0010630.jpg',
    '../Melanoma/ISIC_0010977.jpg',
    '../Melanoma/ISIC_0010778.jpg',
    '../Melanoma/ISIC_0010750.jpg',
    '../Melanoma/ISIC_0010036.jpg',
    '../Melanoma/ISIC_0010591.jpg',
    '../Melanoma/ISIC_0010208.jpg',
    '../Melanoma/ISIC_0010546.jpg',
    '../Melanoma/ISIC_0011112.jpg',
    '../Melanoma/ISIC_0010754.jpg',
    '../Melanoma/ISIC_0010783.jpg',
    '../Melanoma/ISIC_0010797.jpg',
    '../Melanoma/ISIC_0010608.jpg',
    '../Melanoma/ISIC_0011270.jpg',
    '../Melanoma/ISIC_0011264.jpg',
    '../Melanoma/ISIC_0010350.jpg',
    '../Melanoma/ISIC_0010393.jpg',
    '../Melanoma/ISIC_0011099.jpg',
    '../Melanoma/ISIC_0010392.jpg',
    '../Melanoma/ISIC_0010423.jpg',
    '../Melanoma/ISIC_0010379.jpg',
    '../Melanoma/ISIC_0010812.jpg',
    '../Melanoma/ISIC_0010609.jpg',
    '../Melanoma/ISIC_0010796.jpg',
    '../Melanoma/ISIC_0010782.jpg',
    '../Melanoma/ISIC_0010741.jpg',
    '../Melanoma/ISIC_0011305.jpg',
    '../Melanoma/ISIC_0010580.jpg',
    '../Melanoma/ISIC_0010231.jpg',
    '../Melanoma/ISIC_0010225.jpg',
    '../Melanoma/ISIC_0010543.jpg',
    '../Melanoma/ISIC_0009984.jpg',
    '../Melanoma/ISIC_0009992.jpg',
    '../Melanoma/ISIC_0010555.jpg',
    '../Melanoma/ISIC_0011139.jpg',
    '../Melanoma/ISIC_0010596.jpg',
    '../Melanoma/ISIC_0010757.jpg',
    '../Melanoma/ISIC_0011267.jpg',
    '../Melanoma/ISIC_0011273.jpg',
    '../Melanoma/ISIC_0010145.jpg',
    '../Melanoma/ISIC_0010810.jpg',
    '../Melanoma/ISIC_0010391.jpg',
    '../Melanoma/ISIC_0010385.jpg',
    '../Melanoma/ISIC_0010965.jpg',
    '../Melanoma/ISIC_0010971.jpg',
    '../Melanoma/ISIC_0010024.jpg',
    '../Melanoma/ISIC_0010583.jpg',
    '../Melanoma/ISIC_0010597.jpg',
    '../Melanoma/ISIC_0009950.jpg',
    '../Melanoma/ISIC_0011138.jpg',
    '../Melanoma/ISIC_0009993.jpg',
    '../Melanoma/ISIC_0010533.jpg',
    '../Melanoma/ISIC_0010527.jpg',
    '../Melanoma/ISIC_0010241.jpg',
    '../Melanoma/ISIC_0011163.jpg',
    '../Melanoma/ISIC_0011349.jpg',
    '../Melanoma/ISIC_0010719.jpg',
    '../Melanoma/ISIC_0010094.jpg',
    '../Melanoma/ISIC_0010080.jpg',
    '../Melanoma/ISIC_0010137.jpg',
    '../Melanoma/ISIC_0010862.jpg',
    '../Melanoma/ISIC_0010876.jpg',
    '../Melanoma/ISIC_0010321.jpg',
    '../Melanoma/ISIC_0009894.jpg',
    '../Melanoma/ISIC_0010485.jpg',
    '../Melanoma/ISIC_0010863.jpg',
    '../Melanoma/ISIC_0010644.jpg',
    '../Melanoma/ISIC_0010122.jpg',
    '../Melanoma/ISIC_0010917.jpg',
    '../Melanoma/ISIC_0010081.jpg',
    '../Melanoma/ISIC_0011374.jpg',
    '../Melanoma/ISIC_0010730.jpg',
    '../Melanoma/ISIC_0010056.jpg',
    '../Melanoma/ISIC_0011348.jpg',
    '../Melanoma/ISIC_0010283.jpg',
    '../Melanoma/ISIC_0011176.jpg',
    '../Melanoma/ISIC_0010240.jpg',
    '../Melanoma/ISIC_0010532.jpg',
    '../Melanoma/ISIC_0011174.jpg',
    '../Melanoma/ISIC_0009908.jpg',
    '../Melanoma/ISIC_0010295.jpg',
    '../Melanoma/ISIC_0009934.jpg',
    '../Melanoma/ISIC_0010054.jpg',
    '../Melanoma/ISIC_0010652.jpg',
    '../Melanoma/ISIC_0010120.jpg',
    '../Melanoma/ISIC_0010322.jpg',
    '../Melanoma/ISIC_0010478.jpg',
    '../Melanoma/ISIC_0009897.jpg',
    '../Melanoma/ISIC_0009868.jpg',
    '../Melanoma/ISIC_0010486.jpg',
    '../Melanoma/ISIC_0009882.jpg',
    '../Melanoma/ISIC_0010860.jpg',
    '../Melanoma/ISIC_0010690.jpg',
    '../Melanoma/ISIC_0010653.jpg',
    '../Melanoma/ISIC_0010900.jpg',
    '../Melanoma/ISIC_0011388.jpg',
    '../Melanoma/ISIC_0010280.jpg',
    '../Melanoma/ISIC_0011161.jpg',
    '../Melanoma/ISIC_0010723.jpg',
    '../Melanoma/ISIC_0010737.jpg',
    '../Melanoma/ISIC_0010938.jpg',
    '../Melanoma/ISIC_0010119.jpg',
    '../Melanoma/ISIC_0010131.jpg',
    '../Melanoma/ISIC_0010469.jpg',
    '../Melanoma/ISIC_0009886.jpg',
    '../Melanoma/ISIC_0011039.jpg',
    '../Melanoma/ISIC_0010441.jpg',
    '../Melanoma/ISIC_0010482.jpg',
    '../Melanoma/ISIC_0010468.jpg',
    '../Melanoma/ISIC_0011399.jpg',
    '../Melanoma/ISIC_0010050.jpg',
    '../Melanoma/ISIC_0011366.jpg',
    '../Melanoma/ISIC_0009918.jpg',
    '../Melanoma/ISIC_0010534.jpg',
    '../Melanoma/ISIC_0011158.jpg',
    '../Melanoma/ISIC_0010278.jpg',
    '../Melanoma/ISIC_0011166.jpg',
    '../Melanoma/ISIC_0010536.jpg',
    '../Melanoma/ISIC_0011370.jpg',
    '../Melanoma/ISIC_0011364.jpg',
    '../Melanoma/ISIC_0011210.jpg',
    '../Melanoma/ISIC_0011238.jpg',
    '../Melanoma/ISIC_0010898.jpg',
    '../Melanoma/ISIC_0011012.jpg',
    '../Melanoma/ISIC_0011013.jpg',
    '../Melanoma/ISIC_0010319.jpg',
    '../Melanoma/ISIC_0009890.jpg',
    '../Melanoma/ISIC_0011007.jpg',
    '../Melanoma/ISIC_0010872.jpg',
    '../Melanoma/ISIC_0010866.jpg',
    '../Melanoma/ISIC_0010655.jpg',
    '../Melanoma/ISIC_0011239.jpg',
    '../Melanoma/ISIC_0010912.jpg',
    '../Melanoma/ISIC_0011371.jpg',
    '../Melanoma/ISIC_0009927.jpg',
    '../Melanoma/ISIC_0010245.jpg',
    '../Melanoma/ISIC_0010537.jpg',
    '../Melanoma/ISIC_0010251.jpg',
    '../Melanoma/ISIC_0011181.jpg',
    '../Melanoma/ISIC_0009916.jpg',
    '../Melanoma/ISIC_0011368.jpg',
    '../Melanoma/ISIC_0011340.jpg',
    '../Melanoma/ISIC_0010089.jpg',
    '../Melanoma/ISIC_0010923.jpg',
    '../Melanoma/ISIC_0010466.jpg',
    '../Melanoma/ISIC_0010329.jpg',
    '../Melanoma/ISIC_0011209.jpg',
    '../Melanoma/ISIC_0011369.jpg',
    '../Melanoma/ISIC_0011194.jpg',
    '../Melanoma/ISIC_0011169.jpg',
    '../Melanoma/ISIC_0011196.jpg',
    '../Melanoma/ISIC_0010288.jpg',
    '../Melanoma/ISIC_0010707.jpg',
    '../Melanoma/ISIC_0010049.jpg',
    '../Melanoma/ISIC_0010934.jpg',
    '../Melanoma/ISIC_0010883.jpg',
    '../Melanoma/ISIC_0010302.jpg',
    '../Melanoma/ISIC_0010470.jpg',
    '../Melanoma/ISIC_0011381.jpg',
    '../Melanoma/ISIC_0010909.jpg',
    '../Melanoma/ISIC_0011356.jpg',
    '../Melanoma/ISIC_0010289.jpg',
    '../Melanoma/ISIC_0011140.jpg',
    '../Melanoma/ISIC_0011178.jpg',
    '../Melanoma/ISIC_0010514.jpg',
    '../Melanoma/ISIC_0011187.jpg',
    '../Melanoma/ISIC_0010299.jpg',
    '../Melanoma/ISIC_0009910.jpg',
    '../Melanoma/ISIC_0011193.jpg',
    '../Melanoma/ISIC_0010925.jpg',
    '../Melanoma/ISIC_0011391.jpg',
    '../Melanoma/ISIC_0011030.jpg',
    '../Melanoma/ISIC_0010313.jpg',
    '../Melanoma/ISIC_0011031.jpg',
    '../Melanoma/ISIC_0010878.jpg',
    '../Melanoma/ISIC_0010663.jpg',
    '../Melanoma/ISIC_0011390.jpg',
    '../Melanoma/ISIC_0009905.jpg',
    '../Melanoma/ISIC_0010267.jpg',
    '../Melanoma/ISIC_0011151.jpg',
    '../Melanoma/ISIC_0010271.jpg',
    '../Melanoma/ISIC_0010265.jpg',
    '../Melanoma/ISIC_0010503.jpg',
    '../Melanoma/ISIC_0009913.jpg',
    '../Melanoma/ISIC_0010729.jpg',
    '../Melanoma/ISIC_0010067.jpg',
    '../Melanoma/ISIC_0010852.jpg',
    '../Melanoma/ISIC_0009898.jpg',
    '../Melanoma/ISIC_0010476.jpg',
    '../Melanoma/ISIC_0011032.jpg',
    '../Melanoma/ISIC_0010106.jpg',
    '../Melanoma/ISIC_0010648.jpg',
    '../Melanoma/ISIC_0010890.jpg',
    '../Melanoma/ISIC_0011387.jpg',
    '../Melanoma/ISIC_0010714.jpg',
    '../Melanoma/ISIC_0011344.jpg',
    '../Melanoma/ISIC_0011350.jpg',
    '../Melanoma/ISIC_0010728.jpg',
    '../Melanoma/ISIC_0011185.jpg',
    '../Melanoma/ISIC_0010516.jpg',
    '../Melanoma/ISIC_0010217.jpg',
    '../Melanoma/ISIC_0011135.jpg',
    '../Melanoma/ISIC_0011121.jpg',
    '../Melanoma/ISIC_0010559.jpg',
    '../Melanoma/ISIC_0010767.jpg',
    '../Melanoma/ISIC_0011337.jpg',
    '../Melanoma/ISIC_0010029.jpg',
    '../Melanoma/ISIC_0010175.jpg',
    '../Melanoma/ISIC_0010808.jpg',
    '../Melanoma/ISIC_0010834.jpg',
    '../Melanoma/ISIC_0010388.jpg',
    '../Melanoma/ISIC_0011040.jpg',
    '../Melanoma/ISIC_0010376.jpg',
    '../Melanoma/ISIC_0010410.jpg',
    '../Melanoma/ISIC_0011295.jpg',
    '../Melanoma/ISIC_0010809.jpg',
    '../Melanoma/ISIC_0011256.jpg',
    '../Melanoma/ISIC_0010148.jpg',
    '../Melanoma/ISIC_0010174.jpg',
    '../Melanoma/ISIC_0010799.jpg',
    '../Melanoma/ISIC_0010982.jpg',
    '../Melanoma/ISIC_0010766.jpg',
    '../Melanoma/ISIC_0010000.jpg',
    '../Melanoma/ISIC_0010772.jpg',
    '../Melanoma/ISIC_0009960.jpg',
    '../Melanoma/ISIC_0010564.jpg',
    '../Melanoma/ISIC_0009989.jpg',
    '../Melanoma/ISIC_0011136.jpg',
    '../Melanoma/ISIC_0010764.jpg',
    '../Melanoma/ISIC_0010770.jpg',
    '../Melanoma/ISIC_0011308.jpg',
    '../Melanoma/ISIC_0010016.jpg',
    '../Melanoma/ISIC_0011334.jpg',
    '../Melanoma/ISIC_0011268.jpg',
    '../Melanoma/ISIC_0010610.jpg',
    '../Melanoma/ISIC_0010162.jpg',
    '../Melanoma/ISIC_0010189.jpg',
    '../Melanoma/ISIC_0010360.jpg',
    '../Melanoma/ISIC_0011056.jpg',
    '../Melanoma/ISIC_0011042.jpg',
    '../Melanoma/ISIC_0011095.jpg',
    '../Melanoma/ISIC_0011094.jpg',
    '../Melanoma/ISIC_0011043.jpg',
    '../Melanoma/ISIC_0010349.jpg',
    '../Melanoma/ISIC_0011057.jpg',
    '../Melanoma/ISIC_0010407.jpg',
    '../Melanoma/ISIC_0010413.jpg',
    '../Melanoma/ISIC_0011269.jpg',
    '../Melanoma/ISIC_0010611.jpg',
    '../Melanoma/ISIC_0010942.jpg',
    '../Melanoma/ISIC_0010995.jpg',
    '../Melanoma/ISIC_0010759.jpg',
    '../Melanoma/ISIC_0010765.jpg',
    '../Melanoma/ISIC_0011137.jpg',
    '../Melanoma/ISIC_0010749.jpg',
    '../Melanoma/ISIC_0010007.jpg',
    '../Melanoma/ISIC_0010629.jpg',
    '../Melanoma/ISIC_0011286.jpg',
    '../Melanoma/ISIC_0010359.jpg',
    '../Melanoma/ISIC_0010417.jpg',
    '../Melanoma/ISIC_0010402.jpg',
    '../Melanoma/ISIC_0010364.jpg',
    '../Melanoma/ISIC_0010416.jpg',
    '../Melanoma/ISIC_0010358.jpg',
    '../Melanoma/ISIC_0011052.jpg',
    '../Melanoma/ISIC_0010990.jpg',
    '../Melanoma/ISIC_0010576.jpg',
    '../Melanoma/ISIC_0010210.jpg',
    '../Melanoma/ISIC_0011132.jpg',
    '../Melanoma/ISIC_0011126.jpg',
    '../Melanoma/ISIC_0011130.jpg',
    '../Melanoma/ISIC_0010548.jpg',
    '../Melanoma/ISIC_0011118.jpg',
    '../Melanoma/ISIC_0010789.jpg',
    '../Melanoma/ISIC_0010979.jpg',
    '../Melanoma/ISIC_0010164.jpg',
    '../Melanoma/ISIC_0011285.jpg',
    '../Melanoma/ISIC_0010366.jpg',
    '../Melanoma/ISIC_0010400.jpg',
    '../Melanoma/ISIC_0010414.jpg',
    '../Melanoma/ISIC_0010372.jpg',
    '../Melanoma/ISIC_0010398.jpg',
    '../Melanoma/ISIC_0010415.jpg',
    '../Melanoma/ISIC_0010401.jpg',
    '../Melanoma/ISIC_0011045.jpg',
    '../Melanoma/ISIC_0010171.jpg',
    '../Melanoma/ISIC_0010165.jpg',
    '../Melanoma/ISIC_0011247.jpg',
    '../Melanoma/ISIC_0010978.jpg',
    '../Melanoma/ISIC_0010777.jpg',
    '../Melanoma/ISIC_0010011.jpg',
    '../Melanoma/ISIC_0010039.jpg',
    '../Melanoma/ISIC_0010993.jpg',
    '../Melanoma/ISIC_0009971.jpg',
    '../Melanoma/ISIC_0010207.jpg',
    '../Melanoma/ISIC_0011125.jpg',
    '../Modermaerker/ISIC_0000025.jpg',
    '../Modermaerker/ISIC_0000019.jpg',
    '../Modermaerker/ISIC_0000227.jpg',
    '../Modermaerker/ISIC_0000541.jpg',
    '../Modermaerker/ISIC_0000233.jpg',
    '../Modermaerker/ISIC_0000353.jpg',
    '../Modermaerker/ISIC_0000435.jpg',
    '../Modermaerker/ISIC_0000421.jpg',
    '../Modermaerker/ISIC_0000347.jpg',
    '../Modermaerker/ISIC_0000409.jpg',
    '../Modermaerker/ISIC_0000384.jpg',
    '../Modermaerker/ISIC_0000179.jpg',
    '../Modermaerker/ISIC_0000192.jpg',
    '../Modermaerker/ISIC_0000186.jpg',
    '../Modermaerker/ISIC_0000187.jpg',
    '../Modermaerker/ISIC_0000193.jpg',
    '../Modermaerker/ISIC_0000178.jpg',
    '../Modermaerker/ISIC_0000385.jpg',
    '../Modermaerker/ISIC_0000391.jpg',
    '../Modermaerker/ISIC_0000408.jpg',
    '../Modermaerker/ISIC_0000346.jpg',
    '../Modermaerker/ISIC_0000352.jpg',
    '../Modermaerker/ISIC_0000232.jpg',
    '../Modermaerker/ISIC_0000226.jpg',
    '../Modermaerker/ISIC_0000540.jpg',
    '../Modermaerker/ISIC_0000018.jpg',
    '../Modermaerker/ISIC_0000024.jpg',
    '../Modermaerker/ISIC_0000032.jpg',
    '../Modermaerker/ISIC_0000230.jpg',
    '../Modermaerker/ISIC_0000556.jpg',
    '../Modermaerker/ISIC_0000542.jpg',
    '../Modermaerker/ISIC_0000224.jpg',
    '../Modermaerker/ISIC_0000218.jpg',
    '../Modermaerker/ISIC_0000344.jpg',
    '../Modermaerker/ISIC_0000422.jpg',
    '../Modermaerker/ISIC_0000436.jpg',
    '../Modermaerker/ISIC_0000350.jpg',
    '../Modermaerker/ISIC_0000378.jpg',
    '../Modermaerker/ISIC_0000387.jpg',
    '../Modermaerker/ISIC_0000185.jpg',
    '../Modermaerker/ISIC_0000191.jpg',
    '../Modermaerker/ISIC_0000190.jpg',
    '../Modermaerker/ISIC_0000184.jpg',
    '../Modermaerker/ISIC_0000392.jpg',
    '../Modermaerker/ISIC_0000386.jpg',
    '../Modermaerker/ISIC_0000379.jpg',
    '../Modermaerker/ISIC_0000437.jpg',
    '../Modermaerker/ISIC_0000351.jpg',
    '../Modermaerker/ISIC_0000345.jpg',
    '../Modermaerker/ISIC_0000423.jpg',
    '../Modermaerker/ISIC_0000219.jpg',
    '../Modermaerker/ISIC_0000543.jpg',
    '../Modermaerker/ISIC_0000225.jpg',
    '../Modermaerker/ISIC_0000231.jpg',
    '../Modermaerker/ISIC_0000027.jpg',
    '../Modermaerker/ISIC_0000033.jpg',
    '../Modermaerker/ISIC_0000037.jpg',
    '../Modermaerker/ISIC_0000023.jpg',
    '../Modermaerker/ISIC_0000209.jpg',
    '../Modermaerker/ISIC_0000235.jpg',
    '../Modermaerker/ISIC_0000221.jpg',
    '../Modermaerker/ISIC_0000369.jpg',
    '../Modermaerker/ISIC_0000427.jpg',
    '../Modermaerker/ISIC_0000341.jpg',
    '../Modermaerker/ISIC_0000355.jpg',
    '../Modermaerker/ISIC_0000433.jpg',
    '../Modermaerker/ISIC_0000382.jpg',
    '../Modermaerker/ISIC_0000396.jpg',
    '../Modermaerker/ISIC_0000180.jpg',
    '../Modermaerker/ISIC_0000194.jpg',
    '../Modermaerker/ISIC_0000195.jpg',
    '../Modermaerker/ISIC_0000181.jpg',
    '../Modermaerker/ISIC_0000397.jpg',
    '../Modermaerker/ISIC_0000383.jpg',
    '../Modermaerker/ISIC_0000354.jpg',
    '../Modermaerker/ISIC_0000426.jpg',
    '../Modermaerker/ISIC_0000340.jpg',
    '../Modermaerker/ISIC_0000368.jpg',
    '../Modermaerker/ISIC_0000220.jpg',
    '../Modermaerker/ISIC_0000546.jpg',
    '../Modermaerker/ISIC_0000234.jpg',
    '../Modermaerker/ISIC_0000208.jpg',
    '../Modermaerker/ISIC_0000008.jpg',
    '../Modermaerker/ISIC_0000020.jpg',
    '../Modermaerker/ISIC_0000034.jpg',
    '../Modermaerker/ISIC_0000544.jpg',
    '../Modermaerker/ISIC_0000222.jpg',
    '../Modermaerker/ISIC_0000236.jpg',
    '../Modermaerker/ISIC_0000418.jpg',
    '../Modermaerker/ISIC_0000430.jpg',
    '../Modermaerker/ISIC_0000356.jpg',
    '../Modermaerker/ISIC_0000342.jpg',
    '../Modermaerker/ISIC_0000424.jpg',
    '../Modermaerker/ISIC_0000381.jpg',
    '../Modermaerker/ISIC_0000197.jpg',
    '../Modermaerker/ISIC_0000183.jpg',
    '../Modermaerker/ISIC_0000182.jpg',
    '../Modermaerker/ISIC_0000196.jpg',
    '../Modermaerker/ISIC_0000380.jpg',
    '../Modermaerker/ISIC_0000343.jpg',
    '../Modermaerker/ISIC_0000425.jpg',
    '../Modermaerker/ISIC_0000431.jpg',
    '../Modermaerker/ISIC_0000357.jpg',
    '../Modermaerker/ISIC_0000419.jpg',
    '../Modermaerker/ISIC_0000237.jpg',
    '../Modermaerker/ISIC_0000545.jpg',
    '../Modermaerker/ISIC_0000223.jpg',
    '../Modermaerker/ISIC_0000021.jpg',
    '../Modermaerker/ISIC_0000009.jpg',
    '../Modermaerker/ISIC_0000052.jpg',
    '../Modermaerker/ISIC_0000085.jpg',
    '../Modermaerker/ISIC_0000091.jpg',
    '../Modermaerker/ISIC_0000244.jpg',
    '../Modermaerker/ISIC_0000250.jpg',
    '../Modermaerker/ISIC_0000536.jpg',
    '../Modermaerker/ISIC_0000456.jpg',
    '../Modermaerker/ISIC_0000330.jpg',
    '../Modermaerker/ISIC_0000324.jpg',
    '../Modermaerker/ISIC_0000442.jpg',
    '../Modermaerker/ISIC_0000318.jpg',
    '../Modermaerker/ISIC_0000495.jpg',
    '../Modermaerker/ISIC_0000481.jpg',
    '../Modermaerker/ISIC_0000132.jpg',
    '../Modermaerker/ISIC_0000126.jpg',
    '../Modermaerker/ISIC_0000127.jpg',
    '../Modermaerker/ISIC_0000133.jpg',
    '../Modermaerker/ISIC_0000480.jpg',
    '../Modermaerker/ISIC_0000494.jpg',
    '../Modermaerker/ISIC_0000319.jpg',
    '../Modermaerker/ISIC_0000325.jpg',
    '../Modermaerker/ISIC_0000443.jpg',
    '../Modermaerker/ISIC_0000457.jpg',
    '../Modermaerker/ISIC_0000331.jpg',
    '../Modermaerker/ISIC_0000251.jpg',
    '../Modermaerker/ISIC_0000537.jpg',
    '../Modermaerker/ISIC_0000523.jpg',
    '../Modermaerker/ISIC_0000245.jpg',
    '../Modermaerker/ISIC_0000090.jpg',
    '../Modermaerker/ISIC_0000084.jpg',
    '../Modermaerker/ISIC_0000053.jpg',
    '../Modermaerker/ISIC_0000047.jpg',
    '../Modermaerker/ISIC_0000051.jpg',
    '../Modermaerker/ISIC_0000045.jpg',
    '../Modermaerker/ISIC_0000079.jpg',
    '../Modermaerker/ISIC_0000092.jpg',
    '../Modermaerker/ISIC_0000086.jpg',
    '../Modermaerker/ISIC_0000535.jpg',
    '../Modermaerker/ISIC_0000253.jpg',
    '../Modermaerker/ISIC_0000247.jpg',
    '../Modermaerker/ISIC_0000509.jpg',
    '../Modermaerker/ISIC_0000327.jpg',
    '../Modermaerker/ISIC_0000333.jpg',
    '../Modermaerker/ISIC_0000455.jpg',
    '../Modermaerker/ISIC_0000496.jpg',
    '../Modermaerker/ISIC_0000125.jpg',
    '../Modermaerker/ISIC_0000131.jpg',
    '../Modermaerker/ISIC_0000119.jpg',
    '../Modermaerker/ISIC_0000118.jpg',
    '../Modermaerker/ISIC_0000130.jpg',
    '../Modermaerker/ISIC_0000124.jpg',
    '../Modermaerker/ISIC_0000497.jpg',
    '../Modermaerker/ISIC_0000483.jpg',
    '../Modermaerker/ISIC_0000468.jpg',
    '../Modermaerker/ISIC_0000332.jpg',
    '../Modermaerker/ISIC_0000326.jpg',
    '../Modermaerker/ISIC_0000508.jpg',
    '../Modermaerker/ISIC_0000246.jpg',
    '../Modermaerker/ISIC_0000534.jpg',
    '../Modermaerker/ISIC_0000252.jpg',
    '../Modermaerker/ISIC_0000087.jpg',
    '../Modermaerker/ISIC_0000093.jpg',
    '../Modermaerker/ISIC_0000044.jpg',
    '../Modermaerker/ISIC_0000050.jpg',
    '../Modermaerker/ISIC_0000068.jpg',
    '../Modermaerker/ISIC_0000097.jpg',
    '../Modermaerker/ISIC_0000083.jpg',
    '../Modermaerker/ISIC_0000256.jpg',
    '../Modermaerker/ISIC_0000530.jpg',
    '../Modermaerker/ISIC_0000524.jpg',
    '../Modermaerker/ISIC_0000242.jpg',
    '../Modermaerker/ISIC_0000478.jpg',
    '../Modermaerker/ISIC_0000322.jpg',
    '../Modermaerker/ISIC_0000336.jpg',
    '../Modermaerker/ISIC_0000493.jpg',
    '../Modermaerker/ISIC_0000108.jpg',
    '../Modermaerker/ISIC_0000120.jpg',
    '../Modermaerker/ISIC_0000134.jpg',
    '../Modermaerker/ISIC_0000135.jpg',
    '../Modermaerker/ISIC_0000121.jpg',
    '../Modermaerker/ISIC_0000109.jpg',
    '../Modermaerker/ISIC_0000492.jpg',
    '../Modermaerker/ISIC_0000486.jpg',
    '../Modermaerker/ISIC_0000451.jpg',
    '../Modermaerker/ISIC_0000337.jpg',
    '../Modermaerker/ISIC_0000323.jpg',
    '../Modermaerker/ISIC_0000479.jpg',
    '../Modermaerker/ISIC_0000525.jpg',
    '../Modermaerker/ISIC_0000243.jpg',
    '../Modermaerker/ISIC_0000082.jpg',
    '../Modermaerker/ISIC_0000096.jpg',
    '../Modermaerker/ISIC_0000041.jpg',
    '../Modermaerker/ISIC_0000055.jpg',
    '../Modermaerker/ISIC_0000069.jpg',
    '../Modermaerker/ISIC_0000057.jpg',
    '../Modermaerker/ISIC_0000080.jpg',
    '../Modermaerker/ISIC_0000094.jpg',
    '../Modermaerker/ISIC_0000269.jpg',
    '../Modermaerker/ISIC_0000241.jpg',
    '../Modermaerker/ISIC_0000527.jpg',
    '../Modermaerker/ISIC_0000255.jpg',
    '../Modermaerker/ISIC_0000335.jpg',
    '../Modermaerker/ISIC_0000453.jpg',
    '../Modermaerker/ISIC_0000447.jpg',
    '../Modermaerker/ISIC_0000321.jpg',
    '../Modermaerker/ISIC_0000490.jpg',
    '../Modermaerker/ISIC_0000137.jpg',
    '../Modermaerker/ISIC_0000123.jpg',
    '../Modermaerker/ISIC_0000122.jpg',
    '../Modermaerker/ISIC_0000136.jpg',
    '../Modermaerker/ISIC_0000485.jpg',
    '../Modermaerker/ISIC_0000491.jpg',
    '../Modermaerker/ISIC_0000320.jpg',
    '../Modermaerker/ISIC_0000334.jpg',
    '../Modermaerker/ISIC_0000452.jpg',
    '../Modermaerker/ISIC_0000532.jpg',
    '../Modermaerker/ISIC_0000254.jpg',
    '../Modermaerker/ISIC_0000240.jpg',
    '../Modermaerker/ISIC_0000268.jpg',
    '../Modermaerker/ISIC_0000095.jpg',
    '../Modermaerker/ISIC_0000081.jpg',
    '../Modermaerker/ISIC_0000042.jpg',
    '../Modermaerker/ISIC_0000067.jpg',
    '../Modermaerker/ISIC_0000073.jpg',
    '../Modermaerker/ISIC_0000098.jpg',
    '../Modermaerker/ISIC_0000503.jpg',
    '../Modermaerker/ISIC_0000265.jpg',
    '../Modermaerker/ISIC_0000271.jpg',
    '../Modermaerker/ISIC_0000259.jpg',
    '../Modermaerker/ISIC_0000477.jpg',
    '../Modermaerker/ISIC_0000339.jpg',
    '../Modermaerker/ISIC_0000488.jpg',
    '../Modermaerker/ISIC_0000113.jpg',
    '../Modermaerker/ISIC_0000107.jpg',
    '../Modermaerker/ISIC_0000106.jpg',
    '../Modermaerker/ISIC_0000112.jpg',
    '../Modermaerker/ISIC_0000489.jpg',
    '../Modermaerker/ISIC_0000338.jpg',
    '../Modermaerker/ISIC_0000476.jpg',
    '../Modermaerker/ISIC_0000258.jpg',
    '../Modermaerker/ISIC_0000270.jpg',
    '../Modermaerker/ISIC_0000264.jpg',
    '../Modermaerker/ISIC_0000099.jpg',
    '../Modermaerker/ISIC_0000072.jpg',
    '../Modermaerker/ISIC_0000066.jpg',
    '../Modermaerker/ISIC_0000064.jpg',
    '../Modermaerker/ISIC_0000058.jpg',
    '../Modermaerker/ISIC_0000514.jpg',
    '../Modermaerker/ISIC_0000272.jpg',
    '../Modermaerker/ISIC_0000266.jpg',
    '../Modermaerker/ISIC_0000500.jpg',
    '../Modermaerker/ISIC_0000528.jpg',
    '../Modermaerker/ISIC_0000460.jpg',
    '../Modermaerker/ISIC_0000474.jpg',
    '../Modermaerker/ISIC_0000448.jpg',
    '../Modermaerker/ISIC_0000104.jpg',
    '../Modermaerker/ISIC_0000110.jpg',
    '../Modermaerker/ISIC_0000138.jpg',
    '../Modermaerker/ISIC_0000111.jpg',
    '../Modermaerker/ISIC_0000105.jpg',
    '../Modermaerker/ISIC_0000449.jpg',
    '../Modermaerker/ISIC_0000475.jpg',
    '../Modermaerker/ISIC_0000461.jpg',
    '../Modermaerker/ISIC_0000529.jpg',
    '../Modermaerker/ISIC_0000267.jpg',
    '../Modermaerker/ISIC_0000501.jpg',
    '../Modermaerker/ISIC_0000515.jpg',
    '../Modermaerker/ISIC_0000273.jpg',
    '../Modermaerker/ISIC_0000059.jpg',
    '../Modermaerker/ISIC_0000065.jpg',
    '../Modermaerker/ISIC_0000071.jpg',
    '../Modermaerker/ISIC_0000075.jpg',
    '../Modermaerker/ISIC_0000061.jpg',
    '../Modermaerker/ISIC_0000539.jpg',
    '../Modermaerker/ISIC_0000505.jpg',
    '../Modermaerker/ISIC_0000263.jpg',
    '../Modermaerker/ISIC_0000465.jpg',
    '../Modermaerker/ISIC_0000471.jpg',
    '../Modermaerker/ISIC_0000317.jpg',
    '../Modermaerker/ISIC_0000129.jpg',
    '../Modermaerker/ISIC_0000101.jpg',
    '../Modermaerker/ISIC_0000115.jpg',
    '../Modermaerker/ISIC_0000114.jpg',
    '../Modermaerker/ISIC_0000100.jpg',
    '../Modermaerker/ISIC_0000128.jpg',
    '../Modermaerker/ISIC_0000470.jpg',
    '../Modermaerker/ISIC_0000316.jpg',
    '../Modermaerker/ISIC_0000464.jpg',
    '../Modermaerker/ISIC_0000458.jpg',
    '../Modermaerker/ISIC_0000504.jpg',
    '../Modermaerker/ISIC_0000262.jpg',
    '../Modermaerker/ISIC_0000510.jpg',
    '../Modermaerker/ISIC_0000538.jpg',
    '../Modermaerker/ISIC_0000060.jpg',
    '../Modermaerker/ISIC_0000048.jpg',
    '../Modermaerker/ISIC_0000062.jpg',
    '../Modermaerker/ISIC_0000089.jpg',
    '../Modermaerker/ISIC_0000248.jpg',
    '../Modermaerker/ISIC_0000260.jpg',
    '../Modermaerker/ISIC_0000506.jpg',
    '../Modermaerker/ISIC_0000512.jpg',
    '../Modermaerker/ISIC_0000274.jpg',
    '../Modermaerker/ISIC_0000328.jpg',
    '../Modermaerker/ISIC_0000472.jpg',
    '../Modermaerker/ISIC_0000499.jpg',
    '../Modermaerker/ISIC_0000116.jpg',
    '../Modermaerker/ISIC_0000102.jpg',
    '../Modermaerker/ISIC_0000103.jpg',
    '../Modermaerker/ISIC_0000117.jpg',
    '../Modermaerker/ISIC_0000498.jpg',
    '../Modermaerker/ISIC_0000467.jpg',
    '../Modermaerker/ISIC_0000315.jpg',
    '../Modermaerker/ISIC_0000473.jpg',
    '../Modermaerker/ISIC_0000329.jpg',
    '../Modermaerker/ISIC_0000275.jpg',
    '../Modermaerker/ISIC_0000261.jpg',
    '../Modermaerker/ISIC_0000507.jpg',
    '../Modermaerker/ISIC_0000249.jpg',
    '../Modermaerker/ISIC_0000088.jpg',
    '../Modermaerker/ISIC_0000063.jpg',
    '../Modermaerker/ISIC_0000010.jpg',
    '../Modermaerker/ISIC_0000038.jpg',
    '../Modermaerker/ISIC_0000206.jpg',
    '../Modermaerker/ISIC_0000212.jpg',
    '../Modermaerker/ISIC_0000372.jpg',
    '../Modermaerker/ISIC_0000366.jpg',
    '../Modermaerker/ISIC_0000367.jpg',
    '../Modermaerker/ISIC_0000373.jpg',
    '../Modermaerker/ISIC_0000213.jpg',
    '../Modermaerker/ISIC_0000207.jpg',
    '../Modermaerker/ISIC_0000039.jpg',
    '../Modermaerker/ISIC_0000011.jpg',
    '../Modermaerker/ISIC_0000005.jpg',
    '../Modermaerker/ISIC_0000007.jpg',
    '../Modermaerker/ISIC_0000211.jpg',
    '../Modermaerker/ISIC_0000205.jpg',
    '../Modermaerker/ISIC_0000239.jpg',
    '../Modermaerker/ISIC_0000365.jpg',
    '../Modermaerker/ISIC_0000403.jpg',
    '../Modermaerker/ISIC_0000371.jpg',
    '../Modermaerker/ISIC_0000359.jpg',
    '../Modermaerker/ISIC_0000198.jpg',
    '../Modermaerker/ISIC_0000199.jpg',
    '../Modermaerker/ISIC_0000358.jpg',
    '../Modermaerker/ISIC_0000416.jpg',
    '../Modermaerker/ISIC_0000370.jpg',
    '../Modermaerker/ISIC_0000364.jpg',
    '../Modermaerker/ISIC_0000238.jpg',
    '../Modermaerker/ISIC_0000204.jpg',
    '../Modermaerker/ISIC_0000210.jpg',
    '../Modermaerker/ISIC_0000006.jpg',
    '../Modermaerker/ISIC_0000012.jpg',
    '../Modermaerker/ISIC_0000016.jpg',
    '../Modermaerker/ISIC_0000228.jpg',
    '../Modermaerker/ISIC_0000214.jpg',
    '../Modermaerker/ISIC_0000200.jpg',
    '../Modermaerker/ISIC_0000348.jpg',
    '../Modermaerker/ISIC_0000360.jpg',
    '../Modermaerker/ISIC_0000374.jpg',
    '../Modermaerker/ISIC_0000189.jpg',
    '../Modermaerker/ISIC_0000188.jpg',
    '../Modermaerker/ISIC_0000177.jpg',
    '../Modermaerker/ISIC_0000375.jpg',
    '../Modermaerker/ISIC_0000407.jpg',
    '../Modermaerker/ISIC_0000361.jpg',
    '../Modermaerker/ISIC_0000349.jpg',
    '../Modermaerker/ISIC_0000201.jpg',
    '../Modermaerker/ISIC_0000215.jpg',
    '../Modermaerker/ISIC_0000229.jpg',
    '../Modermaerker/ISIC_0000003.jpg',
    '../Modermaerker/ISIC_0000017.jpg',
    '../Modermaerker/ISIC_0000001.jpg',
    '../Modermaerker/ISIC_0000015.jpg',
    '../Modermaerker/ISIC_0000203.jpg',
    '../Modermaerker/ISIC_0000217.jpg',
    '../Modermaerker/ISIC_0000439.jpg',
    '../Modermaerker/ISIC_0000377.jpg',
    '../Modermaerker/ISIC_0000363.jpg',
    '../Modermaerker/ISIC_0000388.jpg',
    '../Modermaerker/ISIC_0000389.jpg',
    '../Modermaerker/ISIC_0000362.jpg',
    '../Modermaerker/ISIC_0000376.jpg',
    '../Modermaerker/ISIC_0000216.jpg',
    '../Modermaerker/ISIC_0000202.jpg',
    '../Modermaerker/ISIC_0000014.jpg',
    '../Modermaerker/ISIC_0000000.jpg',
    '../Modermaerker/ISIC_0000028.jpg');

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];

    objekt = {sti: document.getElementById("myPicture").getAttribute('src'), tekst: document.getElementById("textfield").value};

    var firebaseRef = firebase.database().ref();

    firebaseRef.push().set(objekt);

    document.getElementById("textfield").value = '';

}