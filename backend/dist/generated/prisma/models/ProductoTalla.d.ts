import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProductoTalla
 *
 */
export type ProductoTallaModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductoTallaPayload>;
export type AggregateProductoTalla = {
    _count: ProductoTallaCountAggregateOutputType | null;
    _avg: ProductoTallaAvgAggregateOutputType | null;
    _sum: ProductoTallaSumAggregateOutputType | null;
    _min: ProductoTallaMinAggregateOutputType | null;
    _max: ProductoTallaMaxAggregateOutputType | null;
};
export type ProductoTallaAvgAggregateOutputType = {
    id: number | null;
    stock: number | null;
    producto_id: number | null;
};
export type ProductoTallaSumAggregateOutputType = {
    id: number | null;
    stock: number | null;
    producto_id: number | null;
};
export type ProductoTallaMinAggregateOutputType = {
    id: number | null;
    talla: string | null;
    stock: number | null;
    activo: boolean | null;
    fecha_creada: Date | null;
    producto_id: number | null;
};
export type ProductoTallaMaxAggregateOutputType = {
    id: number | null;
    talla: string | null;
    stock: number | null;
    activo: boolean | null;
    fecha_creada: Date | null;
    producto_id: number | null;
};
export type ProductoTallaCountAggregateOutputType = {
    id: number;
    talla: number;
    stock: number;
    activo: number;
    fecha_creada: number;
    producto_id: number;
    _all: number;
};
export type ProductoTallaAvgAggregateInputType = {
    id?: true;
    stock?: true;
    producto_id?: true;
};
export type ProductoTallaSumAggregateInputType = {
    id?: true;
    stock?: true;
    producto_id?: true;
};
export type ProductoTallaMinAggregateInputType = {
    id?: true;
    talla?: true;
    stock?: true;
    activo?: true;
    fecha_creada?: true;
    producto_id?: true;
};
export type ProductoTallaMaxAggregateInputType = {
    id?: true;
    talla?: true;
    stock?: true;
    activo?: true;
    fecha_creada?: true;
    producto_id?: true;
};
export type ProductoTallaCountAggregateInputType = {
    id?: true;
    talla?: true;
    stock?: true;
    activo?: true;
    fecha_creada?: true;
    producto_id?: true;
    _all?: true;
};
export type ProductoTallaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoTalla to aggregate.
     */
    where?: Prisma.ProductoTallaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductoTallas to fetch.
     */
    orderBy?: Prisma.ProductoTallaOrderByWithRelationInput | Prisma.ProductoTallaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductoTallaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductoTallas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductoTallas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProductoTallas
    **/
    _count?: true | ProductoTallaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductoTallaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductoTallaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductoTallaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductoTallaMaxAggregateInputType;
};
export type GetProductoTallaAggregateType<T extends ProductoTallaAggregateArgs> = {
    [P in keyof T & keyof AggregateProductoTalla]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductoTalla[P]> : Prisma.GetScalarType<T[P], AggregateProductoTalla[P]>;
};
export type ProductoTallaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoTallaWhereInput;
    orderBy?: Prisma.ProductoTallaOrderByWithAggregationInput | Prisma.ProductoTallaOrderByWithAggregationInput[];
    by: Prisma.ProductoTallaScalarFieldEnum[] | Prisma.ProductoTallaScalarFieldEnum;
    having?: Prisma.ProductoTallaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductoTallaCountAggregateInputType | true;
    _avg?: ProductoTallaAvgAggregateInputType;
    _sum?: ProductoTallaSumAggregateInputType;
    _min?: ProductoTallaMinAggregateInputType;
    _max?: ProductoTallaMaxAggregateInputType;
};
export type ProductoTallaGroupByOutputType = {
    id: number;
    talla: string;
    stock: number;
    activo: boolean;
    fecha_creada: Date;
    producto_id: number;
    _count: ProductoTallaCountAggregateOutputType | null;
    _avg: ProductoTallaAvgAggregateOutputType | null;
    _sum: ProductoTallaSumAggregateOutputType | null;
    _min: ProductoTallaMinAggregateOutputType | null;
    _max: ProductoTallaMaxAggregateOutputType | null;
};
type GetProductoTallaGroupByPayload<T extends ProductoTallaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductoTallaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductoTallaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductoTallaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductoTallaGroupByOutputType[P]>;
}>>;
export type ProductoTallaWhereInput = {
    AND?: Prisma.ProductoTallaWhereInput | Prisma.ProductoTallaWhereInput[];
    OR?: Prisma.ProductoTallaWhereInput[];
    NOT?: Prisma.ProductoTallaWhereInput | Prisma.ProductoTallaWhereInput[];
    id?: Prisma.IntFilter<"ProductoTalla"> | number;
    talla?: Prisma.StringFilter<"ProductoTalla"> | string;
    stock?: Prisma.IntFilter<"ProductoTalla"> | number;
    activo?: Prisma.BoolFilter<"ProductoTalla"> | boolean;
    fecha_creada?: Prisma.DateTimeFilter<"ProductoTalla"> | Date | string;
    producto_id?: Prisma.IntFilter<"ProductoTalla"> | number;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    carrito?: Prisma.CarritoListRelationFilter;
    detallesPedido?: Prisma.DetallePedidoListRelationFilter;
    alertasStock?: Prisma.AlertaStockListRelationFilter;
};
export type ProductoTallaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    talla?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fecha_creada?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
    producto?: Prisma.ProductoOrderByWithRelationInput;
    carrito?: Prisma.CarritoOrderByRelationAggregateInput;
    detallesPedido?: Prisma.DetallePedidoOrderByRelationAggregateInput;
    alertasStock?: Prisma.AlertaStockOrderByRelationAggregateInput;
};
export type ProductoTallaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    producto_id_talla?: Prisma.ProductoTallaProducto_idTallaCompoundUniqueInput;
    AND?: Prisma.ProductoTallaWhereInput | Prisma.ProductoTallaWhereInput[];
    OR?: Prisma.ProductoTallaWhereInput[];
    NOT?: Prisma.ProductoTallaWhereInput | Prisma.ProductoTallaWhereInput[];
    talla?: Prisma.StringFilter<"ProductoTalla"> | string;
    stock?: Prisma.IntFilter<"ProductoTalla"> | number;
    activo?: Prisma.BoolFilter<"ProductoTalla"> | boolean;
    fecha_creada?: Prisma.DateTimeFilter<"ProductoTalla"> | Date | string;
    producto_id?: Prisma.IntFilter<"ProductoTalla"> | number;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    carrito?: Prisma.CarritoListRelationFilter;
    detallesPedido?: Prisma.DetallePedidoListRelationFilter;
    alertasStock?: Prisma.AlertaStockListRelationFilter;
}, "id" | "producto_id_talla">;
export type ProductoTallaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    talla?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fecha_creada?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
    _count?: Prisma.ProductoTallaCountOrderByAggregateInput;
    _avg?: Prisma.ProductoTallaAvgOrderByAggregateInput;
    _max?: Prisma.ProductoTallaMaxOrderByAggregateInput;
    _min?: Prisma.ProductoTallaMinOrderByAggregateInput;
    _sum?: Prisma.ProductoTallaSumOrderByAggregateInput;
};
export type ProductoTallaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductoTallaScalarWhereWithAggregatesInput | Prisma.ProductoTallaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductoTallaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductoTallaScalarWhereWithAggregatesInput | Prisma.ProductoTallaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProductoTalla"> | number;
    talla?: Prisma.StringWithAggregatesFilter<"ProductoTalla"> | string;
    stock?: Prisma.IntWithAggregatesFilter<"ProductoTalla"> | number;
    activo?: Prisma.BoolWithAggregatesFilter<"ProductoTalla"> | boolean;
    fecha_creada?: Prisma.DateTimeWithAggregatesFilter<"ProductoTalla"> | Date | string;
    producto_id?: Prisma.IntWithAggregatesFilter<"ProductoTalla"> | number;
};
export type ProductoTallaCreateInput = {
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutTallasInput;
    carrito?: Prisma.CarritoCreateNestedManyWithoutProductoTallaInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoTallaInput;
    alertasStock?: Prisma.AlertaStockCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaUncheckedCreateInput = {
    id?: number;
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    producto_id: number;
    carrito?: Prisma.CarritoUncheckedCreateNestedManyWithoutProductoTallaInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoTallaInput;
    alertasStock?: Prisma.AlertaStockUncheckedCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaUpdateInput = {
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutTallasNestedInput;
    carrito?: Prisma.CarritoUpdateManyWithoutProductoTallaNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoTallaNestedInput;
    alertasStock?: Prisma.AlertaStockUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    carrito?: Prisma.CarritoUncheckedUpdateManyWithoutProductoTallaNestedInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoTallaNestedInput;
    alertasStock?: Prisma.AlertaStockUncheckedUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaCreateManyInput = {
    id?: number;
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    producto_id: number;
};
export type ProductoTallaUpdateManyMutationInput = {
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoTallaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductoTallaListRelationFilter = {
    every?: Prisma.ProductoTallaWhereInput;
    some?: Prisma.ProductoTallaWhereInput;
    none?: Prisma.ProductoTallaWhereInput;
};
export type ProductoTallaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductoTallaProducto_idTallaCompoundUniqueInput = {
    producto_id: number;
    talla: string;
};
export type ProductoTallaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    talla?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fecha_creada?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
};
export type ProductoTallaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
};
export type ProductoTallaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    talla?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fecha_creada?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
};
export type ProductoTallaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    talla?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fecha_creada?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
};
export type ProductoTallaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    producto_id?: Prisma.SortOrder;
};
export type ProductoTallaNullableScalarRelationFilter = {
    is?: Prisma.ProductoTallaWhereInput | null;
    isNot?: Prisma.ProductoTallaWhereInput | null;
};
export type ProductoTallaCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutProductoInput, Prisma.ProductoTallaUncheckedCreateWithoutProductoInput> | Prisma.ProductoTallaCreateWithoutProductoInput[] | Prisma.ProductoTallaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutProductoInput | Prisma.ProductoTallaCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.ProductoTallaCreateManyProductoInputEnvelope;
    connect?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
};
export type ProductoTallaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutProductoInput, Prisma.ProductoTallaUncheckedCreateWithoutProductoInput> | Prisma.ProductoTallaCreateWithoutProductoInput[] | Prisma.ProductoTallaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutProductoInput | Prisma.ProductoTallaCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.ProductoTallaCreateManyProductoInputEnvelope;
    connect?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
};
export type ProductoTallaUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutProductoInput, Prisma.ProductoTallaUncheckedCreateWithoutProductoInput> | Prisma.ProductoTallaCreateWithoutProductoInput[] | Prisma.ProductoTallaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutProductoInput | Prisma.ProductoTallaCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.ProductoTallaUpsertWithWhereUniqueWithoutProductoInput | Prisma.ProductoTallaUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.ProductoTallaCreateManyProductoInputEnvelope;
    set?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
    disconnect?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
    delete?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
    connect?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
    update?: Prisma.ProductoTallaUpdateWithWhereUniqueWithoutProductoInput | Prisma.ProductoTallaUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.ProductoTallaUpdateManyWithWhereWithoutProductoInput | Prisma.ProductoTallaUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.ProductoTallaScalarWhereInput | Prisma.ProductoTallaScalarWhereInput[];
};
export type ProductoTallaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutProductoInput, Prisma.ProductoTallaUncheckedCreateWithoutProductoInput> | Prisma.ProductoTallaCreateWithoutProductoInput[] | Prisma.ProductoTallaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutProductoInput | Prisma.ProductoTallaCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.ProductoTallaUpsertWithWhereUniqueWithoutProductoInput | Prisma.ProductoTallaUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.ProductoTallaCreateManyProductoInputEnvelope;
    set?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
    disconnect?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
    delete?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
    connect?: Prisma.ProductoTallaWhereUniqueInput | Prisma.ProductoTallaWhereUniqueInput[];
    update?: Prisma.ProductoTallaUpdateWithWhereUniqueWithoutProductoInput | Prisma.ProductoTallaUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.ProductoTallaUpdateManyWithWhereWithoutProductoInput | Prisma.ProductoTallaUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.ProductoTallaScalarWhereInput | Prisma.ProductoTallaScalarWhereInput[];
};
export type ProductoTallaCreateNestedOneWithoutDetallesPedidoInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutDetallesPedidoInput, Prisma.ProductoTallaUncheckedCreateWithoutDetallesPedidoInput>;
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutDetallesPedidoInput;
    connect?: Prisma.ProductoTallaWhereUniqueInput;
};
export type ProductoTallaUpdateOneWithoutDetallesPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutDetallesPedidoInput, Prisma.ProductoTallaUncheckedCreateWithoutDetallesPedidoInput>;
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutDetallesPedidoInput;
    upsert?: Prisma.ProductoTallaUpsertWithoutDetallesPedidoInput;
    disconnect?: Prisma.ProductoTallaWhereInput | boolean;
    delete?: Prisma.ProductoTallaWhereInput | boolean;
    connect?: Prisma.ProductoTallaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoTallaUpdateToOneWithWhereWithoutDetallesPedidoInput, Prisma.ProductoTallaUpdateWithoutDetallesPedidoInput>, Prisma.ProductoTallaUncheckedUpdateWithoutDetallesPedidoInput>;
};
export type ProductoTallaCreateNestedOneWithoutCarritoInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutCarritoInput, Prisma.ProductoTallaUncheckedCreateWithoutCarritoInput>;
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutCarritoInput;
    connect?: Prisma.ProductoTallaWhereUniqueInput;
};
export type ProductoTallaUpdateOneWithoutCarritoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutCarritoInput, Prisma.ProductoTallaUncheckedCreateWithoutCarritoInput>;
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutCarritoInput;
    upsert?: Prisma.ProductoTallaUpsertWithoutCarritoInput;
    disconnect?: Prisma.ProductoTallaWhereInput | boolean;
    delete?: Prisma.ProductoTallaWhereInput | boolean;
    connect?: Prisma.ProductoTallaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoTallaUpdateToOneWithWhereWithoutCarritoInput, Prisma.ProductoTallaUpdateWithoutCarritoInput>, Prisma.ProductoTallaUncheckedUpdateWithoutCarritoInput>;
};
export type ProductoTallaCreateNestedOneWithoutAlertasStockInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutAlertasStockInput, Prisma.ProductoTallaUncheckedCreateWithoutAlertasStockInput>;
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutAlertasStockInput;
    connect?: Prisma.ProductoTallaWhereUniqueInput;
};
export type ProductoTallaUpdateOneWithoutAlertasStockNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoTallaCreateWithoutAlertasStockInput, Prisma.ProductoTallaUncheckedCreateWithoutAlertasStockInput>;
    connectOrCreate?: Prisma.ProductoTallaCreateOrConnectWithoutAlertasStockInput;
    upsert?: Prisma.ProductoTallaUpsertWithoutAlertasStockInput;
    disconnect?: Prisma.ProductoTallaWhereInput | boolean;
    delete?: Prisma.ProductoTallaWhereInput | boolean;
    connect?: Prisma.ProductoTallaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoTallaUpdateToOneWithWhereWithoutAlertasStockInput, Prisma.ProductoTallaUpdateWithoutAlertasStockInput>, Prisma.ProductoTallaUncheckedUpdateWithoutAlertasStockInput>;
};
export type ProductoTallaCreateWithoutProductoInput = {
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    carrito?: Prisma.CarritoCreateNestedManyWithoutProductoTallaInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoTallaInput;
    alertasStock?: Prisma.AlertaStockCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaUncheckedCreateWithoutProductoInput = {
    id?: number;
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    carrito?: Prisma.CarritoUncheckedCreateNestedManyWithoutProductoTallaInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoTallaInput;
    alertasStock?: Prisma.AlertaStockUncheckedCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaCreateOrConnectWithoutProductoInput = {
    where: Prisma.ProductoTallaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoTallaCreateWithoutProductoInput, Prisma.ProductoTallaUncheckedCreateWithoutProductoInput>;
};
export type ProductoTallaCreateManyProductoInputEnvelope = {
    data: Prisma.ProductoTallaCreateManyProductoInput | Prisma.ProductoTallaCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type ProductoTallaUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.ProductoTallaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductoTallaUpdateWithoutProductoInput, Prisma.ProductoTallaUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.ProductoTallaCreateWithoutProductoInput, Prisma.ProductoTallaUncheckedCreateWithoutProductoInput>;
};
export type ProductoTallaUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.ProductoTallaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductoTallaUpdateWithoutProductoInput, Prisma.ProductoTallaUncheckedUpdateWithoutProductoInput>;
};
export type ProductoTallaUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.ProductoTallaScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductoTallaUpdateManyMutationInput, Prisma.ProductoTallaUncheckedUpdateManyWithoutProductoInput>;
};
export type ProductoTallaScalarWhereInput = {
    AND?: Prisma.ProductoTallaScalarWhereInput | Prisma.ProductoTallaScalarWhereInput[];
    OR?: Prisma.ProductoTallaScalarWhereInput[];
    NOT?: Prisma.ProductoTallaScalarWhereInput | Prisma.ProductoTallaScalarWhereInput[];
    id?: Prisma.IntFilter<"ProductoTalla"> | number;
    talla?: Prisma.StringFilter<"ProductoTalla"> | string;
    stock?: Prisma.IntFilter<"ProductoTalla"> | number;
    activo?: Prisma.BoolFilter<"ProductoTalla"> | boolean;
    fecha_creada?: Prisma.DateTimeFilter<"ProductoTalla"> | Date | string;
    producto_id?: Prisma.IntFilter<"ProductoTalla"> | number;
};
export type ProductoTallaCreateWithoutDetallesPedidoInput = {
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutTallasInput;
    carrito?: Prisma.CarritoCreateNestedManyWithoutProductoTallaInput;
    alertasStock?: Prisma.AlertaStockCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaUncheckedCreateWithoutDetallesPedidoInput = {
    id?: number;
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    producto_id: number;
    carrito?: Prisma.CarritoUncheckedCreateNestedManyWithoutProductoTallaInput;
    alertasStock?: Prisma.AlertaStockUncheckedCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaCreateOrConnectWithoutDetallesPedidoInput = {
    where: Prisma.ProductoTallaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoTallaCreateWithoutDetallesPedidoInput, Prisma.ProductoTallaUncheckedCreateWithoutDetallesPedidoInput>;
};
export type ProductoTallaUpsertWithoutDetallesPedidoInput = {
    update: Prisma.XOR<Prisma.ProductoTallaUpdateWithoutDetallesPedidoInput, Prisma.ProductoTallaUncheckedUpdateWithoutDetallesPedidoInput>;
    create: Prisma.XOR<Prisma.ProductoTallaCreateWithoutDetallesPedidoInput, Prisma.ProductoTallaUncheckedCreateWithoutDetallesPedidoInput>;
    where?: Prisma.ProductoTallaWhereInput;
};
export type ProductoTallaUpdateToOneWithWhereWithoutDetallesPedidoInput = {
    where?: Prisma.ProductoTallaWhereInput;
    data: Prisma.XOR<Prisma.ProductoTallaUpdateWithoutDetallesPedidoInput, Prisma.ProductoTallaUncheckedUpdateWithoutDetallesPedidoInput>;
};
export type ProductoTallaUpdateWithoutDetallesPedidoInput = {
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutTallasNestedInput;
    carrito?: Prisma.CarritoUpdateManyWithoutProductoTallaNestedInput;
    alertasStock?: Prisma.AlertaStockUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaUncheckedUpdateWithoutDetallesPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    carrito?: Prisma.CarritoUncheckedUpdateManyWithoutProductoTallaNestedInput;
    alertasStock?: Prisma.AlertaStockUncheckedUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaCreateWithoutCarritoInput = {
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutTallasInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoTallaInput;
    alertasStock?: Prisma.AlertaStockCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaUncheckedCreateWithoutCarritoInput = {
    id?: number;
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    producto_id: number;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoTallaInput;
    alertasStock?: Prisma.AlertaStockUncheckedCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaCreateOrConnectWithoutCarritoInput = {
    where: Prisma.ProductoTallaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoTallaCreateWithoutCarritoInput, Prisma.ProductoTallaUncheckedCreateWithoutCarritoInput>;
};
export type ProductoTallaUpsertWithoutCarritoInput = {
    update: Prisma.XOR<Prisma.ProductoTallaUpdateWithoutCarritoInput, Prisma.ProductoTallaUncheckedUpdateWithoutCarritoInput>;
    create: Prisma.XOR<Prisma.ProductoTallaCreateWithoutCarritoInput, Prisma.ProductoTallaUncheckedCreateWithoutCarritoInput>;
    where?: Prisma.ProductoTallaWhereInput;
};
export type ProductoTallaUpdateToOneWithWhereWithoutCarritoInput = {
    where?: Prisma.ProductoTallaWhereInput;
    data: Prisma.XOR<Prisma.ProductoTallaUpdateWithoutCarritoInput, Prisma.ProductoTallaUncheckedUpdateWithoutCarritoInput>;
};
export type ProductoTallaUpdateWithoutCarritoInput = {
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutTallasNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoTallaNestedInput;
    alertasStock?: Prisma.AlertaStockUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaUncheckedUpdateWithoutCarritoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoTallaNestedInput;
    alertasStock?: Prisma.AlertaStockUncheckedUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaCreateWithoutAlertasStockInput = {
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutTallasInput;
    carrito?: Prisma.CarritoCreateNestedManyWithoutProductoTallaInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaUncheckedCreateWithoutAlertasStockInput = {
    id?: number;
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
    producto_id: number;
    carrito?: Prisma.CarritoUncheckedCreateNestedManyWithoutProductoTallaInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoTallaInput;
};
export type ProductoTallaCreateOrConnectWithoutAlertasStockInput = {
    where: Prisma.ProductoTallaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoTallaCreateWithoutAlertasStockInput, Prisma.ProductoTallaUncheckedCreateWithoutAlertasStockInput>;
};
export type ProductoTallaUpsertWithoutAlertasStockInput = {
    update: Prisma.XOR<Prisma.ProductoTallaUpdateWithoutAlertasStockInput, Prisma.ProductoTallaUncheckedUpdateWithoutAlertasStockInput>;
    create: Prisma.XOR<Prisma.ProductoTallaCreateWithoutAlertasStockInput, Prisma.ProductoTallaUncheckedCreateWithoutAlertasStockInput>;
    where?: Prisma.ProductoTallaWhereInput;
};
export type ProductoTallaUpdateToOneWithWhereWithoutAlertasStockInput = {
    where?: Prisma.ProductoTallaWhereInput;
    data: Prisma.XOR<Prisma.ProductoTallaUpdateWithoutAlertasStockInput, Prisma.ProductoTallaUncheckedUpdateWithoutAlertasStockInput>;
};
export type ProductoTallaUpdateWithoutAlertasStockInput = {
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutTallasNestedInput;
    carrito?: Prisma.CarritoUpdateManyWithoutProductoTallaNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaUncheckedUpdateWithoutAlertasStockInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto_id?: Prisma.IntFieldUpdateOperationsInput | number;
    carrito?: Prisma.CarritoUncheckedUpdateManyWithoutProductoTallaNestedInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaCreateManyProductoInput = {
    id?: number;
    talla: string;
    stock: number;
    activo?: boolean;
    fecha_creada?: Date | string;
};
export type ProductoTallaUpdateWithoutProductoInput = {
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    carrito?: Prisma.CarritoUpdateManyWithoutProductoTallaNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoTallaNestedInput;
    alertasStock?: Prisma.AlertaStockUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    carrito?: Prisma.CarritoUncheckedUpdateManyWithoutProductoTallaNestedInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoTallaNestedInput;
    alertasStock?: Prisma.AlertaStockUncheckedUpdateManyWithoutProductoTallaNestedInput;
};
export type ProductoTallaUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    talla?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fecha_creada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ProductoTallaCountOutputType
 */
export type ProductoTallaCountOutputType = {
    carrito: number;
    detallesPedido: number;
    alertasStock: number;
};
export type ProductoTallaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito?: boolean | ProductoTallaCountOutputTypeCountCarritoArgs;
    detallesPedido?: boolean | ProductoTallaCountOutputTypeCountDetallesPedidoArgs;
    alertasStock?: boolean | ProductoTallaCountOutputTypeCountAlertasStockArgs;
};
/**
 * ProductoTallaCountOutputType without action
 */
export type ProductoTallaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTallaCountOutputType
     */
    select?: Prisma.ProductoTallaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProductoTallaCountOutputType without action
 */
export type ProductoTallaCountOutputTypeCountCarritoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarritoWhereInput;
};
/**
 * ProductoTallaCountOutputType without action
 */
export type ProductoTallaCountOutputTypeCountDetallesPedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePedidoWhereInput;
};
/**
 * ProductoTallaCountOutputType without action
 */
export type ProductoTallaCountOutputTypeCountAlertasStockArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlertaStockWhereInput;
};
export type ProductoTallaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    talla?: boolean;
    stock?: boolean;
    activo?: boolean;
    fecha_creada?: boolean;
    producto_id?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    carrito?: boolean | Prisma.ProductoTalla$carritoArgs<ExtArgs>;
    detallesPedido?: boolean | Prisma.ProductoTalla$detallesPedidoArgs<ExtArgs>;
    alertasStock?: boolean | Prisma.ProductoTalla$alertasStockArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoTallaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productoTalla"]>;
export type ProductoTallaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    talla?: boolean;
    stock?: boolean;
    activo?: boolean;
    fecha_creada?: boolean;
    producto_id?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productoTalla"]>;
export type ProductoTallaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    talla?: boolean;
    stock?: boolean;
    activo?: boolean;
    fecha_creada?: boolean;
    producto_id?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productoTalla"]>;
export type ProductoTallaSelectScalar = {
    id?: boolean;
    talla?: boolean;
    stock?: boolean;
    activo?: boolean;
    fecha_creada?: boolean;
    producto_id?: boolean;
};
export type ProductoTallaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "talla" | "stock" | "activo" | "fecha_creada" | "producto_id", ExtArgs["result"]["productoTalla"]>;
export type ProductoTallaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    carrito?: boolean | Prisma.ProductoTalla$carritoArgs<ExtArgs>;
    detallesPedido?: boolean | Prisma.ProductoTalla$detallesPedidoArgs<ExtArgs>;
    alertasStock?: boolean | Prisma.ProductoTalla$alertasStockArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoTallaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductoTallaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type ProductoTallaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type $ProductoTallaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductoTalla";
    objects: {
        producto: Prisma.$ProductoPayload<ExtArgs>;
        carrito: Prisma.$CarritoPayload<ExtArgs>[];
        detallesPedido: Prisma.$DetallePedidoPayload<ExtArgs>[];
        alertasStock: Prisma.$AlertaStockPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        talla: string;
        stock: number;
        activo: boolean;
        fecha_creada: Date;
        producto_id: number;
    }, ExtArgs["result"]["productoTalla"]>;
    composites: {};
};
export type ProductoTallaGetPayload<S extends boolean | null | undefined | ProductoTallaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload, S>;
export type ProductoTallaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductoTallaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductoTallaCountAggregateInputType | true;
};
export interface ProductoTallaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductoTalla'];
        meta: {
            name: 'ProductoTalla';
        };
    };
    /**
     * Find zero or one ProductoTalla that matches the filter.
     * @param {ProductoTallaFindUniqueArgs} args - Arguments to find a ProductoTalla
     * @example
     * // Get one ProductoTalla
     * const productoTalla = await prisma.productoTalla.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoTallaFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductoTallaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductoTallaClient<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProductoTalla that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoTallaFindUniqueOrThrowArgs} args - Arguments to find a ProductoTalla
     * @example
     * // Get one ProductoTalla
     * const productoTalla = await prisma.productoTalla.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoTallaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductoTallaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoTallaClient<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductoTalla that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoTallaFindFirstArgs} args - Arguments to find a ProductoTalla
     * @example
     * // Get one ProductoTalla
     * const productoTalla = await prisma.productoTalla.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoTallaFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductoTallaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductoTallaClient<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductoTalla that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoTallaFindFirstOrThrowArgs} args - Arguments to find a ProductoTalla
     * @example
     * // Get one ProductoTalla
     * const productoTalla = await prisma.productoTalla.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoTallaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductoTallaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoTallaClient<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProductoTallas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoTallaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductoTallas
     * const productoTallas = await prisma.productoTalla.findMany()
     *
     * // Get first 10 ProductoTallas
     * const productoTallas = await prisma.productoTalla.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productoTallaWithIdOnly = await prisma.productoTalla.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductoTallaFindManyArgs>(args?: Prisma.SelectSubset<T, ProductoTallaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProductoTalla.
     * @param {ProductoTallaCreateArgs} args - Arguments to create a ProductoTalla.
     * @example
     * // Create one ProductoTalla
     * const ProductoTalla = await prisma.productoTalla.create({
     *   data: {
     *     // ... data to create a ProductoTalla
     *   }
     * })
     *
     */
    create<T extends ProductoTallaCreateArgs>(args: Prisma.SelectSubset<T, ProductoTallaCreateArgs<ExtArgs>>): Prisma.Prisma__ProductoTallaClient<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProductoTallas.
     * @param {ProductoTallaCreateManyArgs} args - Arguments to create many ProductoTallas.
     * @example
     * // Create many ProductoTallas
     * const productoTalla = await prisma.productoTalla.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductoTallaCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductoTallaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProductoTallas and returns the data saved in the database.
     * @param {ProductoTallaCreateManyAndReturnArgs} args - Arguments to create many ProductoTallas.
     * @example
     * // Create many ProductoTallas
     * const productoTalla = await prisma.productoTalla.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProductoTallas and only return the `id`
     * const productoTallaWithIdOnly = await prisma.productoTalla.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductoTallaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductoTallaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProductoTalla.
     * @param {ProductoTallaDeleteArgs} args - Arguments to delete one ProductoTalla.
     * @example
     * // Delete one ProductoTalla
     * const ProductoTalla = await prisma.productoTalla.delete({
     *   where: {
     *     // ... filter to delete one ProductoTalla
     *   }
     * })
     *
     */
    delete<T extends ProductoTallaDeleteArgs>(args: Prisma.SelectSubset<T, ProductoTallaDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductoTallaClient<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProductoTalla.
     * @param {ProductoTallaUpdateArgs} args - Arguments to update one ProductoTalla.
     * @example
     * // Update one ProductoTalla
     * const productoTalla = await prisma.productoTalla.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductoTallaUpdateArgs>(args: Prisma.SelectSubset<T, ProductoTallaUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductoTallaClient<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProductoTallas.
     * @param {ProductoTallaDeleteManyArgs} args - Arguments to filter ProductoTallas to delete.
     * @example
     * // Delete a few ProductoTallas
     * const { count } = await prisma.productoTalla.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductoTallaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductoTallaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductoTallas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoTallaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductoTallas
     * const productoTalla = await prisma.productoTalla.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductoTallaUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductoTallaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductoTallas and returns the data updated in the database.
     * @param {ProductoTallaUpdateManyAndReturnArgs} args - Arguments to update many ProductoTallas.
     * @example
     * // Update many ProductoTallas
     * const productoTalla = await prisma.productoTalla.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProductoTallas and only return the `id`
     * const productoTallaWithIdOnly = await prisma.productoTalla.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProductoTallaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductoTallaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProductoTalla.
     * @param {ProductoTallaUpsertArgs} args - Arguments to update or create a ProductoTalla.
     * @example
     * // Update or create a ProductoTalla
     * const productoTalla = await prisma.productoTalla.upsert({
     *   create: {
     *     // ... data to create a ProductoTalla
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductoTalla we want to update
     *   }
     * })
     */
    upsert<T extends ProductoTallaUpsertArgs>(args: Prisma.SelectSubset<T, ProductoTallaUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductoTallaClient<runtime.Types.Result.GetResult<Prisma.$ProductoTallaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProductoTallas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoTallaCountArgs} args - Arguments to filter ProductoTallas to count.
     * @example
     * // Count the number of ProductoTallas
     * const count = await prisma.productoTalla.count({
     *   where: {
     *     // ... the filter for the ProductoTallas we want to count
     *   }
     * })
    **/
    count<T extends ProductoTallaCountArgs>(args?: Prisma.Subset<T, ProductoTallaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductoTallaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProductoTalla.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoTallaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoTallaAggregateArgs>(args: Prisma.Subset<T, ProductoTallaAggregateArgs>): Prisma.PrismaPromise<GetProductoTallaAggregateType<T>>;
    /**
     * Group by ProductoTalla.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoTallaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ProductoTallaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductoTallaGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductoTallaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductoTallaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoTallaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProductoTalla model
     */
    readonly fields: ProductoTallaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProductoTalla.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductoTallaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    producto<T extends Prisma.ProductoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    carrito<T extends Prisma.ProductoTalla$carritoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoTalla$carritoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    detallesPedido<T extends Prisma.ProductoTalla$detallesPedidoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoTalla$detallesPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    alertasStock<T extends Prisma.ProductoTalla$alertasStockArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoTalla$alertasStockArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlertaStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the ProductoTalla model
 */
export interface ProductoTallaFieldRefs {
    readonly id: Prisma.FieldRef<"ProductoTalla", 'Int'>;
    readonly talla: Prisma.FieldRef<"ProductoTalla", 'String'>;
    readonly stock: Prisma.FieldRef<"ProductoTalla", 'Int'>;
    readonly activo: Prisma.FieldRef<"ProductoTalla", 'Boolean'>;
    readonly fecha_creada: Prisma.FieldRef<"ProductoTalla", 'DateTime'>;
    readonly producto_id: Prisma.FieldRef<"ProductoTalla", 'Int'>;
}
/**
 * ProductoTalla findUnique
 */
export type ProductoTallaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    /**
     * Filter, which ProductoTalla to fetch.
     */
    where: Prisma.ProductoTallaWhereUniqueInput;
};
/**
 * ProductoTalla findUniqueOrThrow
 */
export type ProductoTallaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    /**
     * Filter, which ProductoTalla to fetch.
     */
    where: Prisma.ProductoTallaWhereUniqueInput;
};
/**
 * ProductoTalla findFirst
 */
export type ProductoTallaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    /**
     * Filter, which ProductoTalla to fetch.
     */
    where?: Prisma.ProductoTallaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductoTallas to fetch.
     */
    orderBy?: Prisma.ProductoTallaOrderByWithRelationInput | Prisma.ProductoTallaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductoTallas.
     */
    cursor?: Prisma.ProductoTallaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductoTallas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductoTallas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductoTallas.
     */
    distinct?: Prisma.ProductoTallaScalarFieldEnum | Prisma.ProductoTallaScalarFieldEnum[];
};
/**
 * ProductoTalla findFirstOrThrow
 */
export type ProductoTallaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    /**
     * Filter, which ProductoTalla to fetch.
     */
    where?: Prisma.ProductoTallaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductoTallas to fetch.
     */
    orderBy?: Prisma.ProductoTallaOrderByWithRelationInput | Prisma.ProductoTallaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductoTallas.
     */
    cursor?: Prisma.ProductoTallaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductoTallas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductoTallas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductoTallas.
     */
    distinct?: Prisma.ProductoTallaScalarFieldEnum | Prisma.ProductoTallaScalarFieldEnum[];
};
/**
 * ProductoTalla findMany
 */
export type ProductoTallaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    /**
     * Filter, which ProductoTallas to fetch.
     */
    where?: Prisma.ProductoTallaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductoTallas to fetch.
     */
    orderBy?: Prisma.ProductoTallaOrderByWithRelationInput | Prisma.ProductoTallaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProductoTallas.
     */
    cursor?: Prisma.ProductoTallaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductoTallas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductoTallas.
     */
    skip?: number;
    distinct?: Prisma.ProductoTallaScalarFieldEnum | Prisma.ProductoTallaScalarFieldEnum[];
};
/**
 * ProductoTalla create
 */
export type ProductoTallaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProductoTalla.
     */
    data: Prisma.XOR<Prisma.ProductoTallaCreateInput, Prisma.ProductoTallaUncheckedCreateInput>;
};
/**
 * ProductoTalla createMany
 */
export type ProductoTallaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductoTallas.
     */
    data: Prisma.ProductoTallaCreateManyInput | Prisma.ProductoTallaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProductoTalla createManyAndReturn
 */
export type ProductoTallaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * The data used to create many ProductoTallas.
     */
    data: Prisma.ProductoTallaCreateManyInput | Prisma.ProductoTallaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductoTalla update
 */
export type ProductoTallaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProductoTalla.
     */
    data: Prisma.XOR<Prisma.ProductoTallaUpdateInput, Prisma.ProductoTallaUncheckedUpdateInput>;
    /**
     * Choose, which ProductoTalla to update.
     */
    where: Prisma.ProductoTallaWhereUniqueInput;
};
/**
 * ProductoTalla updateMany
 */
export type ProductoTallaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductoTallas.
     */
    data: Prisma.XOR<Prisma.ProductoTallaUpdateManyMutationInput, Prisma.ProductoTallaUncheckedUpdateManyInput>;
    /**
     * Filter which ProductoTallas to update
     */
    where?: Prisma.ProductoTallaWhereInput;
    /**
     * Limit how many ProductoTallas to update.
     */
    limit?: number;
};
/**
 * ProductoTalla updateManyAndReturn
 */
export type ProductoTallaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * The data used to update ProductoTallas.
     */
    data: Prisma.XOR<Prisma.ProductoTallaUpdateManyMutationInput, Prisma.ProductoTallaUncheckedUpdateManyInput>;
    /**
     * Filter which ProductoTallas to update
     */
    where?: Prisma.ProductoTallaWhereInput;
    /**
     * Limit how many ProductoTallas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductoTalla upsert
 */
export type ProductoTallaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProductoTalla to update in case it exists.
     */
    where: Prisma.ProductoTallaWhereUniqueInput;
    /**
     * In case the ProductoTalla found by the `where` argument doesn't exist, create a new ProductoTalla with this data.
     */
    create: Prisma.XOR<Prisma.ProductoTallaCreateInput, Prisma.ProductoTallaUncheckedCreateInput>;
    /**
     * In case the ProductoTalla was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductoTallaUpdateInput, Prisma.ProductoTallaUncheckedUpdateInput>;
};
/**
 * ProductoTalla delete
 */
export type ProductoTallaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
    /**
     * Filter which ProductoTalla to delete.
     */
    where: Prisma.ProductoTallaWhereUniqueInput;
};
/**
 * ProductoTalla deleteMany
 */
export type ProductoTallaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoTallas to delete
     */
    where?: Prisma.ProductoTallaWhereInput;
    /**
     * Limit how many ProductoTallas to delete.
     */
    limit?: number;
};
/**
 * ProductoTalla.carrito
 */
export type ProductoTalla$carritoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carrito
     */
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    where?: Prisma.CarritoWhereInput;
    orderBy?: Prisma.CarritoOrderByWithRelationInput | Prisma.CarritoOrderByWithRelationInput[];
    cursor?: Prisma.CarritoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarritoScalarFieldEnum | Prisma.CarritoScalarFieldEnum[];
};
/**
 * ProductoTalla.detallesPedido
 */
export type ProductoTalla$detallesPedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    where?: Prisma.DetallePedidoWhereInput;
    orderBy?: Prisma.DetallePedidoOrderByWithRelationInput | Prisma.DetallePedidoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetallePedidoScalarFieldEnum | Prisma.DetallePedidoScalarFieldEnum[];
};
/**
 * ProductoTalla.alertasStock
 */
export type ProductoTalla$alertasStockArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaStock
     */
    select?: Prisma.AlertaStockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AlertaStock
     */
    omit?: Prisma.AlertaStockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlertaStockInclude<ExtArgs> | null;
    where?: Prisma.AlertaStockWhereInput;
    orderBy?: Prisma.AlertaStockOrderByWithRelationInput | Prisma.AlertaStockOrderByWithRelationInput[];
    cursor?: Prisma.AlertaStockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlertaStockScalarFieldEnum | Prisma.AlertaStockScalarFieldEnum[];
};
/**
 * ProductoTalla without action
 */
export type ProductoTallaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoTalla
     */
    select?: Prisma.ProductoTallaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductoTalla
     */
    omit?: Prisma.ProductoTallaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoTallaInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ProductoTalla.d.ts.map