import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Categorias
 *
 */
export type CategoriasModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoriasPayload>;
export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null;
    _avg: CategoriasAvgAggregateOutputType | null;
    _sum: CategoriasSumAggregateOutputType | null;
    _min: CategoriasMinAggregateOutputType | null;
    _max: CategoriasMaxAggregateOutputType | null;
};
export type CategoriasAvgAggregateOutputType = {
    id_categoria: number | null;
};
export type CategoriasSumAggregateOutputType = {
    id_categoria: number | null;
};
export type CategoriasMinAggregateOutputType = {
    id_categoria: number | null;
    nombre: string | null;
    descripcion: string | null;
};
export type CategoriasMaxAggregateOutputType = {
    id_categoria: number | null;
    nombre: string | null;
    descripcion: string | null;
};
export type CategoriasCountAggregateOutputType = {
    id_categoria: number;
    nombre: number;
    descripcion: number;
    _all: number;
};
export type CategoriasAvgAggregateInputType = {
    id_categoria?: true;
};
export type CategoriasSumAggregateInputType = {
    id_categoria?: true;
};
export type CategoriasMinAggregateInputType = {
    id_categoria?: true;
    nombre?: true;
    descripcion?: true;
};
export type CategoriasMaxAggregateInputType = {
    id_categoria?: true;
    nombre?: true;
    descripcion?: true;
};
export type CategoriasCountAggregateInputType = {
    id_categoria?: true;
    nombre?: true;
    descripcion?: true;
    _all?: true;
};
export type CategoriasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to aggregate.
     */
    where?: Prisma.CategoriasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categorias to fetch.
     */
    orderBy?: Prisma.CategoriasOrderByWithRelationInput | Prisma.CategoriasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CategoriasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categorias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categorias
    **/
    _count?: true | CategoriasCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType;
};
export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
    [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategorias[P]> : Prisma.GetScalarType<T[P], AggregateCategorias[P]>;
};
export type CategoriasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriasWhereInput;
    orderBy?: Prisma.CategoriasOrderByWithAggregationInput | Prisma.CategoriasOrderByWithAggregationInput[];
    by: Prisma.CategoriasScalarFieldEnum[] | Prisma.CategoriasScalarFieldEnum;
    having?: Prisma.CategoriasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriasCountAggregateInputType | true;
    _avg?: CategoriasAvgAggregateInputType;
    _sum?: CategoriasSumAggregateInputType;
    _min?: CategoriasMinAggregateInputType;
    _max?: CategoriasMaxAggregateInputType;
};
export type CategoriasGroupByOutputType = {
    id_categoria: number;
    nombre: string;
    descripcion: string | null;
    _count: CategoriasCountAggregateOutputType | null;
    _avg: CategoriasAvgAggregateOutputType | null;
    _sum: CategoriasSumAggregateOutputType | null;
    _min: CategoriasMinAggregateOutputType | null;
    _max: CategoriasMaxAggregateOutputType | null;
};
type GetCategoriasGroupByPayload<T extends CategoriasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriasGroupByOutputType[P]>;
}>>;
export type CategoriasWhereInput = {
    AND?: Prisma.CategoriasWhereInput | Prisma.CategoriasWhereInput[];
    OR?: Prisma.CategoriasWhereInput[];
    NOT?: Prisma.CategoriasWhereInput | Prisma.CategoriasWhereInput[];
    id_categoria?: Prisma.IntFilter<"Categorias"> | number;
    nombre?: Prisma.StringFilter<"Categorias"> | string;
    descripcion?: Prisma.StringNullableFilter<"Categorias"> | string | null;
    productos?: Prisma.ProductosListRelationFilter;
};
export type CategoriasOrderByWithRelationInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    productos?: Prisma.ProductosOrderByRelationAggregateInput;
};
export type CategoriasWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number;
    AND?: Prisma.CategoriasWhereInput | Prisma.CategoriasWhereInput[];
    OR?: Prisma.CategoriasWhereInput[];
    NOT?: Prisma.CategoriasWhereInput | Prisma.CategoriasWhereInput[];
    nombre?: Prisma.StringFilter<"Categorias"> | string;
    descripcion?: Prisma.StringNullableFilter<"Categorias"> | string | null;
    productos?: Prisma.ProductosListRelationFilter;
}, "id_categoria">;
export type CategoriasOrderByWithAggregationInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CategoriasCountOrderByAggregateInput;
    _avg?: Prisma.CategoriasAvgOrderByAggregateInput;
    _max?: Prisma.CategoriasMaxOrderByAggregateInput;
    _min?: Prisma.CategoriasMinOrderByAggregateInput;
    _sum?: Prisma.CategoriasSumOrderByAggregateInput;
};
export type CategoriasScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategoriasScalarWhereWithAggregatesInput | Prisma.CategoriasScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategoriasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategoriasScalarWhereWithAggregatesInput | Prisma.CategoriasScalarWhereWithAggregatesInput[];
    id_categoria?: Prisma.IntWithAggregatesFilter<"Categorias"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Categorias"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"Categorias"> | string | null;
};
export type CategoriasCreateInput = {
    nombre: string;
    descripcion?: string | null;
    productos?: Prisma.ProductosCreateNestedManyWithoutCategoriaInput;
};
export type CategoriasUncheckedCreateInput = {
    id_categoria?: number;
    nombre: string;
    descripcion?: string | null;
    productos?: Prisma.ProductosUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type CategoriasUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productos?: Prisma.ProductosUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriasUncheckedUpdateInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productos?: Prisma.ProductosUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriasCreateManyInput = {
    id_categoria?: number;
    nombre: string;
    descripcion?: string | null;
};
export type CategoriasUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoriasUncheckedUpdateManyInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoriasCountOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
};
export type CategoriasAvgOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
};
export type CategoriasMaxOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
};
export type CategoriasMinOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
};
export type CategoriasSumOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
};
export type CategoriasScalarRelationFilter = {
    is?: Prisma.CategoriasWhereInput;
    isNot?: Prisma.CategoriasWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CategoriasCreateNestedOneWithoutProductosInput = {
    create?: Prisma.XOR<Prisma.CategoriasCreateWithoutProductosInput, Prisma.CategoriasUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.CategoriasCreateOrConnectWithoutProductosInput;
    connect?: Prisma.CategoriasWhereUniqueInput;
};
export type CategoriasUpdateOneRequiredWithoutProductosNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriasCreateWithoutProductosInput, Prisma.CategoriasUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.CategoriasCreateOrConnectWithoutProductosInput;
    upsert?: Prisma.CategoriasUpsertWithoutProductosInput;
    connect?: Prisma.CategoriasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoriasUpdateToOneWithWhereWithoutProductosInput, Prisma.CategoriasUpdateWithoutProductosInput>, Prisma.CategoriasUncheckedUpdateWithoutProductosInput>;
};
export type CategoriasCreateWithoutProductosInput = {
    nombre: string;
    descripcion?: string | null;
};
export type CategoriasUncheckedCreateWithoutProductosInput = {
    id_categoria?: number;
    nombre: string;
    descripcion?: string | null;
};
export type CategoriasCreateOrConnectWithoutProductosInput = {
    where: Prisma.CategoriasWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriasCreateWithoutProductosInput, Prisma.CategoriasUncheckedCreateWithoutProductosInput>;
};
export type CategoriasUpsertWithoutProductosInput = {
    update: Prisma.XOR<Prisma.CategoriasUpdateWithoutProductosInput, Prisma.CategoriasUncheckedUpdateWithoutProductosInput>;
    create: Prisma.XOR<Prisma.CategoriasCreateWithoutProductosInput, Prisma.CategoriasUncheckedCreateWithoutProductosInput>;
    where?: Prisma.CategoriasWhereInput;
};
export type CategoriasUpdateToOneWithWhereWithoutProductosInput = {
    where?: Prisma.CategoriasWhereInput;
    data: Prisma.XOR<Prisma.CategoriasUpdateWithoutProductosInput, Prisma.CategoriasUncheckedUpdateWithoutProductosInput>;
};
export type CategoriasUpdateWithoutProductosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoriasUncheckedUpdateWithoutProductosInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type CategoriasCountOutputType
 */
export type CategoriasCountOutputType = {
    productos: number;
};
export type CategoriasCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productos?: boolean | CategoriasCountOutputTypeCountProductosArgs;
};
/**
 * CategoriasCountOutputType without action
 */
export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: Prisma.CategoriasCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CategoriasCountOutputType without action
 */
export type CategoriasCountOutputTypeCountProductosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductosWhereInput;
};
export type CategoriasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_categoria?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    productos?: boolean | Prisma.Categorias$productosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriasCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categorias"]>;
export type CategoriasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_categoria?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
}, ExtArgs["result"]["categorias"]>;
export type CategoriasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_categoria?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
}, ExtArgs["result"]["categorias"]>;
export type CategoriasSelectScalar = {
    id_categoria?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
};
export type CategoriasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_categoria" | "nombre" | "descripcion", ExtArgs["result"]["categorias"]>;
export type CategoriasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productos?: boolean | Prisma.Categorias$productosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriasCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CategoriasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CategoriasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CategoriasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Categorias";
    objects: {
        productos: Prisma.$ProductosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_categoria: number;
        nombre: string;
        descripcion: string | null;
    }, ExtArgs["result"]["categorias"]>;
    composites: {};
};
export type CategoriasGetPayload<S extends boolean | null | undefined | CategoriasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoriasPayload, S>;
export type CategoriasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriasCountAggregateInputType | true;
};
export interface CategoriasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Categorias'];
        meta: {
            name: 'Categorias';
        };
    };
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {CategoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriasFindUniqueArgs>(args: Prisma.SelectSubset<T, CategoriasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategoriasClient<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriasClient<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriasFindFirstArgs>(args?: Prisma.SelectSubset<T, CategoriasFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategoriasClient<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriasClient<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     *
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     *
     * // Only select the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.findMany({ select: { id_categoria: true } })
     *
     */
    findMany<T extends CategoriasFindManyArgs>(args?: Prisma.SelectSubset<T, CategoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Categorias.
     * @param {CategoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     *
     */
    create<T extends CategoriasCreateArgs>(args: Prisma.SelectSubset<T, CategoriasCreateArgs<ExtArgs>>): Prisma.Prisma__CategoriasClient<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Categorias.
     * @param {CategoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoriasCreateManyArgs>(args?: Prisma.SelectSubset<T, CategoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriasCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categorias and only return the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.createManyAndReturn({
     *   select: { id_categoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoriasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CategoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Categorias.
     * @param {CategoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     *
     */
    delete<T extends CategoriasDeleteArgs>(args: Prisma.SelectSubset<T, CategoriasDeleteArgs<ExtArgs>>): Prisma.Prisma__CategoriasClient<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Categorias.
     * @param {CategoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoriasUpdateArgs>(args: Prisma.SelectSubset<T, CategoriasUpdateArgs<ExtArgs>>): Prisma.Prisma__CategoriasClient<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Categorias.
     * @param {CategoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoriasDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoriasUpdateManyArgs>(args: Prisma.SelectSubset<T, CategoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriasUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categorias and only return the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.updateManyAndReturn({
     *   select: { id_categoria: true },
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
    updateManyAndReturn<T extends CategoriasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CategoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Categorias.
     * @param {CategoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends CategoriasUpsertArgs>(args: Prisma.SelectSubset<T, CategoriasUpsertArgs<ExtArgs>>): Prisma.Prisma__CategoriasClient<runtime.Types.Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriasCountArgs>(args?: Prisma.Subset<T, CategoriasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriasCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Prisma.Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>;
    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CategoriasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategoriasGroupByArgs['orderBy'];
    } : {
        orderBy?: CategoriasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Categorias model
     */
    readonly fields: CategoriasFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Categorias.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CategoriasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    productos<T extends Prisma.Categorias$productosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Categorias$productosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Categorias model
 */
export interface CategoriasFieldRefs {
    readonly id_categoria: Prisma.FieldRef<"Categorias", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Categorias", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Categorias", 'String'>;
}
/**
 * Categorias findUnique
 */
export type CategoriasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
    /**
     * Filter, which Categorias to fetch.
     */
    where: Prisma.CategoriasWhereUniqueInput;
};
/**
 * Categorias findUniqueOrThrow
 */
export type CategoriasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
    /**
     * Filter, which Categorias to fetch.
     */
    where: Prisma.CategoriasWhereUniqueInput;
};
/**
 * Categorias findFirst
 */
export type CategoriasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
    /**
     * Filter, which Categorias to fetch.
     */
    where?: Prisma.CategoriasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categorias to fetch.
     */
    orderBy?: Prisma.CategoriasOrderByWithRelationInput | Prisma.CategoriasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categorias.
     */
    cursor?: Prisma.CategoriasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categorias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categorias.
     */
    distinct?: Prisma.CategoriasScalarFieldEnum | Prisma.CategoriasScalarFieldEnum[];
};
/**
 * Categorias findFirstOrThrow
 */
export type CategoriasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
    /**
     * Filter, which Categorias to fetch.
     */
    where?: Prisma.CategoriasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categorias to fetch.
     */
    orderBy?: Prisma.CategoriasOrderByWithRelationInput | Prisma.CategoriasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categorias.
     */
    cursor?: Prisma.CategoriasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categorias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categorias.
     */
    distinct?: Prisma.CategoriasScalarFieldEnum | Prisma.CategoriasScalarFieldEnum[];
};
/**
 * Categorias findMany
 */
export type CategoriasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
    /**
     * Filter, which Categorias to fetch.
     */
    where?: Prisma.CategoriasWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categorias to fetch.
     */
    orderBy?: Prisma.CategoriasOrderByWithRelationInput | Prisma.CategoriasOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categorias.
     */
    cursor?: Prisma.CategoriasWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categorias.
     */
    skip?: number;
    distinct?: Prisma.CategoriasScalarFieldEnum | Prisma.CategoriasScalarFieldEnum[];
};
/**
 * Categorias create
 */
export type CategoriasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
    /**
     * The data needed to create a Categorias.
     */
    data: Prisma.XOR<Prisma.CategoriasCreateInput, Prisma.CategoriasUncheckedCreateInput>;
};
/**
 * Categorias createMany
 */
export type CategoriasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: Prisma.CategoriasCreateManyInput | Prisma.CategoriasCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Categorias createManyAndReturn
 */
export type CategoriasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * The data used to create many Categorias.
     */
    data: Prisma.CategoriasCreateManyInput | Prisma.CategoriasCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Categorias update
 */
export type CategoriasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
    /**
     * The data needed to update a Categorias.
     */
    data: Prisma.XOR<Prisma.CategoriasUpdateInput, Prisma.CategoriasUncheckedUpdateInput>;
    /**
     * Choose, which Categorias to update.
     */
    where: Prisma.CategoriasWhereUniqueInput;
};
/**
 * Categorias updateMany
 */
export type CategoriasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: Prisma.XOR<Prisma.CategoriasUpdateManyMutationInput, Prisma.CategoriasUncheckedUpdateManyInput>;
    /**
     * Filter which Categorias to update
     */
    where?: Prisma.CategoriasWhereInput;
    /**
     * Limit how many Categorias to update.
     */
    limit?: number;
};
/**
 * Categorias updateManyAndReturn
 */
export type CategoriasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * The data used to update Categorias.
     */
    data: Prisma.XOR<Prisma.CategoriasUpdateManyMutationInput, Prisma.CategoriasUncheckedUpdateManyInput>;
    /**
     * Filter which Categorias to update
     */
    where?: Prisma.CategoriasWhereInput;
    /**
     * Limit how many Categorias to update.
     */
    limit?: number;
};
/**
 * Categorias upsert
 */
export type CategoriasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
    /**
     * The filter to search for the Categorias to update in case it exists.
     */
    where: Prisma.CategoriasWhereUniqueInput;
    /**
     * In case the Categorias found by the `where` argument doesn't exist, create a new Categorias with this data.
     */
    create: Prisma.XOR<Prisma.CategoriasCreateInput, Prisma.CategoriasUncheckedCreateInput>;
    /**
     * In case the Categorias was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CategoriasUpdateInput, Prisma.CategoriasUncheckedUpdateInput>;
};
/**
 * Categorias delete
 */
export type CategoriasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
    /**
     * Filter which Categorias to delete.
     */
    where: Prisma.CategoriasWhereUniqueInput;
};
/**
 * Categorias deleteMany
 */
export type CategoriasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: Prisma.CategoriasWhereInput;
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number;
};
/**
 * Categorias.productos
 */
export type Categorias$productosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Productos
     */
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    where?: Prisma.ProductosWhereInput;
    orderBy?: Prisma.ProductosOrderByWithRelationInput | Prisma.ProductosOrderByWithRelationInput[];
    cursor?: Prisma.ProductosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductosScalarFieldEnum | Prisma.ProductosScalarFieldEnum[];
};
/**
 * Categorias without action
 */
export type CategoriasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: Prisma.CategoriasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categorias
     */
    omit?: Prisma.CategoriasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoriasInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Categorias.d.ts.map